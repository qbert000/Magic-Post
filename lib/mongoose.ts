import mongoose from "mongoose"

let isConnected = false;

const connectData =async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('asdasa')
    if(isConnected) return console.log('mongodb is areadly')

    try {
        await mongoose.connect("mongodb+srv://quyen1412kid:quyen1412kid@magicpost.bzlkl4l.mongodb.net/?retryWrites=true&w=majority")
        isConnected = true;

        console.log("connect to mongoDB");
    } catch (error) {
        console.log(error)
    }

}


export default connectData;