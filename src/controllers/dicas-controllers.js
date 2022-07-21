class Dicas {
    rotas(app){
        app.get("/dicas", (req, res) => {
           res.send("<h1>Deu certo!!!</h1>") 
        //    precisa retornar uma dica aleatória do banco de dados
        })

        app.post("/dicas", (req, res) => {
            res.status(200).json({nome : "Flávio"})
            //  recebe uma dica no banco de dados
        })
    }
}

export default new Dicas;