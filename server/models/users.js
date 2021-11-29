 
const bcrypt = require('bcrypt');
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('user_listing');
module.exports.collection = collection;

const list = [
    { 
        firstName: 'Huaqi',
        lastName: 'Zhang',
        handle: 'zhangh8@newpaltz',
        pic: '',
        password: 'test',
        isAdmin: true,
        emails: [
            "zhangh8@newpaltz.edu"
        ],
        following: [ { handle: '@vp', isApproved: true }, { handle: '@huaqi', isApproved: true }, ]
    },
];

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

module.exports.Get = user_id => collection.findOne({_id: new ObjectId(user_id)}) 

module.exports.GetByHandle = (handle) => collection.findOne({ handle }).then(x=> ({ ...x, password: undefined }));

module.exports.Add = async function Add(user) {
    if(!user.handle){
         return Promise.reject( { code: 422, msg: "Email is required" } )
    }

    const hash = await bcrypt.hash(user.password, +process.env.SALT_ROUNDS)
        
        user.password = hash;

        const user2 = await collection.insertOne(user);
        user._id = user2.insertedId;

        return { ...user, password: undefined };
}


module.exports.Update = async function Update(user_id, user) {

    const results = await collection.findOneAndUpdate(
        {_id: new ObjectId(user_id) }, 
        { $set: user },
        { returnDocument: 'after'}
    );
        
    return { ...results.value, password: undefined };
}

module.exports.Delete = async function Delete(user_id) {
    const results = await collection.findOneAndDelete({_id: new ObjectId(user_id) })

    return results.value;
}

module.exports.Signin = async function Signin(handle, password){
    console.log({ handle, password})
    const user = await collection.findOne({ handle });
    if(!user){
        return Promise.reject( { code: 401, msg: "Please enter a valid e-mail" });
    }

    const result = await bcrypt.compare(password, user.password)
        
    if( ! result ){
        throw { code: 401, msg: "Wrong Password" } ;
    }
    
    const data = { ...user, password: undefined };
    
    return { user: data };

    
}

module.exports.Seed = async ()=>{
    for (const x of list) {
        await module.exports.Add(x)
    }
}