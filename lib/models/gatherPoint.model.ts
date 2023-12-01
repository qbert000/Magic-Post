import mongoose from 'mongoose'

const gatherPointSchema = new mongoose.Schema({
    address: {
        type: String,
    },
    listTransformPoint : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'TransformPoint'
        }
    ],
    manager : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    employeer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    order: [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'Order' 
        }
    ]
})

const GatherPoint = mongoose.models.GatherPoint || mongoose.model('GatherPoint', gatherPointSchema)

export default GatherPoint;