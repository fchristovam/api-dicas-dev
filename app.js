import express from "express"
import Dicas from "./src/controllers/dicas-controllers.js"
import dotenv from "dotenv"

dotenv.config();
const porta = 3000;
const app = express();

app.listen(porta, () => {
    console.log("Deu certo! Servidor rodando.")
});

app.use(express.json());

Dicas.rotas(app);