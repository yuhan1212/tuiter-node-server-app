import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    tuit: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    disliked: Boolean,
}, {collection: 'tuits'});
export default schema;