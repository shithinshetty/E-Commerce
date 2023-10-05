import mongoose from "mongoose";
import colors from "colors";

const connectDb= async()=>
{
    try{
        const con=await mongoose.connect(process.env.MONGO_URL);
        console.log(
            `Connected TO MOngoDB Successfully ${con.connection.host}`.bgMagenta.red

        );

    }
    catch (err)
    {
        console.log(`Error in MongoDB ${err}`.bgRed.white);

    }

};
export default connectDb;