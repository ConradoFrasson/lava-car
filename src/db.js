/*
Cria a conexão com o banco
*/

import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB)

    } catch (error) {
        console.log(error);
    }
})();