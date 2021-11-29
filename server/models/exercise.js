const Users = require( "./exercise");
const { ObjectId } = require('bson');
const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('exercise_log');
module.exports.collection = collection;

module.exports.GetAll = function GetAll() { return collection.find().toArray() ; }

module.exports.GetByHandle = function GetByHandle(handle) {return collection.find({ user_handle: handle }).toArray() }

module.exports.Add = async function Add(log) {
    if(!log.user_handle){
        throw {code: 422, msg: "log must have an Owner"}
    }
    
    const response = await collection.insertOne(log);
    log.id = response.insertedId;

    return { ...log };
}
