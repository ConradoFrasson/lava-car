import{ Schema, model } from "mongoose"

const veiculoSchema = new Schema({
placa: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7
},
nome: {
    type: String,
    required: true
},
cor: {
    type: String,
    enum: ["Vermelho", "Preto", "Branco"],
    required: true,
},
categoria: {
    type: String,
    enum: ["Carro", "Moto", "Onibus", "Van", "Caminhão"],
    required:true
},
cliente: {
    type: Schema.Types.ObjectId,
    ref: "Cliente",
    required: true
}

})

const Veiculo = model("Veiculo", veiculoSchema)

export default Veiculo;