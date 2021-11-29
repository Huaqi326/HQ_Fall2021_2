const { client } = require('./mongo');

const collection = client.db(process.env.MONGO_DB).collection('user_listing');
module.exports.collection = collection;

//  To get a list of who someone follows. Use the Users model

function Follow(follower, followee) {
    return collection.updateOne(
            { handle: follower, "following.handle": { $ne: followee} },
            { $addToSet : { following: { handle: followee, isApproved: false } } },
        collection.updateOne(
            { handle: followee, "follower.handle": { $ne: follower} },
            { $addToSet : { follower: { handle: follower, isApproved: false } } },
        )
    );
}

function UnFollow(follower, followee) {
    return collection.updateOne(
        { handle: follower },
        { $pull : { following: { handle: followee } } }
    );    
}

function Approve(follower, followee, shouldApprove) {
    return collection.updateOne(
        { handle: followee, "following.handle": follower },
        { $set : { "following.$.isApproved": shouldApprove } },
        collection.updateOne(
            { handle: follower, "follower.handle": followee },
            { $set : { "follower.$.isApproved": shouldApprove }},
        )
    );  
}

module.exports = {
    Follow, UnFollow, Approve, 
}