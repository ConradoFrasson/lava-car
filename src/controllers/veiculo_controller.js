import Veiculo from "../models/Veiculo_model.js"

export const store = async (req, res) => {
    try {
        const content = await Veiculo.create(req.body)
        req.json(content)
        res.status(201)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Veiculo.find(req.query).exec();
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await Veiculo.findById(req.params.id).populate("cliente").e
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const content = await Veiculo.findByIdAndUpdate(req.params, req.body)
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}