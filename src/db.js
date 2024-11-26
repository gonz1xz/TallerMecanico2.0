import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost/datosTaller')
        console.log(">>>>>>> DB is connect")
    }catch(e){
        console.error(e)
    }
}