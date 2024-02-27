import { Schema, model } from 'mongoose';

const GymSchema = new Schema({
    numCliente: {
        type: Number, 
        required: true,
        unique: true
    },
    nombre: String,
    direccion: String,
    telefono: String, 
    edad: String,
    apellidoP: String,
    apellidoM: String
}, {
    versionKey: false,
    timestamps: true
});

export default model('Gym', GymSchema);
