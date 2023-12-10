import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: String, require: true},
    firstName: {type : String, require: true},
    lastName: {type:String, require: true},
    image: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    isPostion: {type: Boolean, default: false},
    career : { type: String, default: '' },
    workPlace : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TransPoint" || "GatherPoint"
    }
})


const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;