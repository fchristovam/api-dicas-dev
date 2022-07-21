import express from "express";

const porta = 3000;
const app = express();

app.listen(porta, () => {
    console.log("Deu certo! Servidor rodando.")
});

app.use(express.json());