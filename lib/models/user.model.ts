import { Active } from "@/client/contants/enum";
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
    email : {
        type: String,
        require : true
    },
    isPostion: {type: Boolean, default: false},
    career : { type: String, default: '' },
    active : {
        type : String, default: Active.normal
    },
    workPlace : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TransPoint" || "GatherPoint"
    }
})


const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;