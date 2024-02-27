import mongoose from "mongoose";

mongoose.connect(process.env.CONEXION)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

export default mongoose;
