import mongoose from 'mongoose'

const transPointSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    gatherPoint: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'GartherPoint',
    },
    manager : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    employeer : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    order: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
        }
    ]

})

const TransPoint = mongoose.models.TransPoint || mongoose.model('TransPoint', transPointSchema)

export default TransPoint;
