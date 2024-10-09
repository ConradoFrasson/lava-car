/*
Cria a conexão com o banco
*/

import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect()

    } catch (error) {
        console.log(error);
    }
})();