import{ Schema, model } from "mongoose"

const vehicleSchema = new Schema({
plate: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7
},
maintenances: {
    type: Schema.Types.ObjectId,
    ref: "Maintence",
    required: true
},
year: {
    type: Number,
    required: true,
},
model: {
    type: String,
    enum: ["Carro", "Moto", "Onibus", "Van", "Caminhão"],
    required:true
},
owner: {
    type: String,
    ref: "Vehicle",
    required: true
}

})

const Vehicle = model("Vehicle", vehicleSchema)

export default Vehicle;