import mongoose, { mongo } from "mongoose";
import { string } from "zod";
import Address from "./address.model";

const orderSchema = new mongoose.Schema({
    id: {type: String, require: true},
    statusDate: [
        {type: Date, require: true}
    ],
    statusOption: [
        {type: String}
    ],
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    receiver: {
        type: String,
    },
    createAt: {
        type: Date, require: true
    },
    complete: {
        type: Date
    },
    description: {type: String},
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    sdt:{type: String},
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