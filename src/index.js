/*
inicializa o servidor
Carrega os serviços
*/

import e from "express";
import "dotenv/config";
import "./db.js"
import workshop_router from "./routes/workshop_route.js"
import vehicle_router from "./routes/vehicle_route.js"
import maintenance_router from "./routes/maintenance_route.js"

const app = e();

app.use(e.json())

app.use('/workshop', workshop_router)
app.use('/vehicle', vehicle_router)
app.use('/maintenance', maintenance_router)

app.listen(process.env.APi_PORT, () => console.log("Sistema de gerenciamento de oficinas ok" + process.env.APi_PORT));