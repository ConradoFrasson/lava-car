import{ Schema, model } from "mongoose"

const maintenanceSchema = new Schema({
workshop: {
    type: db.Schema.Types.ObjectId,
    ref: "Workshop",
    required: true
},
services: {
    type: Object,
    name: ["Troca de bateria", "Troca de disco de freio"],
    price: ["55", "40"],
    required: true
},
totalCost: {
    type: Number,
    required: true,
},
date: {
    type: Date,
    required:true
},
vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true
}

})

const Maintenance = model("Maintenance", maintenanceSchema)

export default Maintenance;