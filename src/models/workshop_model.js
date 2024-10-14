/*
O modelo define os dados dos documentos que vão
pertencer a uma coleção
*/

import{ Schema, model } from "mongoose"

const workshopSchema = new Schema({
name: {
    type: String,
    required: true
},
adress: {
    type: String,
    required: true
},
specialties: {
    type: [String],
    enum: [ "brakes", "battery"],
    required: true
}

})

const Workshop = model("Workshop", workshopSchema)

export default Workshop;