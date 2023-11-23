import mongoose from "mongoose";

const addressSchema = new mongoose.Schema ( {
    id: {type: String, require: true},
    city: String,
    district: String,
    ward: String,
})

const Address = mongoose.models.Address || mongoose.model('Address', addressSchema);

export default Address;