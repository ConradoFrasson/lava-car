/*
Definir a implementação de um serviço definido na rota
*/

import Cliente from "../models/cliente_model.js"

export const store = async (req, res) => {
    try {
        const content = await Cliente.create(req.body)
        req.json(content)
        res.status(201)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const index = async (req, res) => {
    try {
        const content = await Cliente.create(req.body)
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const show = async (req, res) => {
    try {
        const content = await Cliente.create(req.body)
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const content = await Cliente.findByIdAndUpdate(req.params,req.body)
        res.json(content)
    } catch (error) {
        res.status(400).send(error.message)
    }
}