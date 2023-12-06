import mongoose, { mongo } from "mongoose";
import { string } from "zod";

const orderSchema = new mongoose.Schema({
    id: {type: String, require: true},
    statusDate: [
        {type: Date, require: true}
    ],
    statusOption: [
        {type: String, require: true}
    ],
    statusIsDone :[
        {
            type:Boolean, require: true
        }
    ],
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiverName: {
        type: String,
    },
    description: {type: String},
    city : {
        type : String,
    },
    district: {
        type: String,
    }, 
    ward : {
        type : String,
    },
    addressSender : {
        type: String,
    },
    phone:{type: String},
    typeOrder: {
        type: String, require: true
    },
    specialService: {
        type: String
    },
    postage: [
        {type: Number}
    ],
    weight: {
        type: Number
    }
    
})


const Order = mongoose.models.Order || mongoose.model('Order', orderSchema)

export default Order;

