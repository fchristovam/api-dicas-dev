class Dicas {
    rotas(app){
        app.get("/dicas", (req, res) => {
           res.send("<h1>Deu certo!!!</h1>")
        })

        app.post("/dicas", (req, res) => {
            res.status(200).json({nome : "Flávio"})
        })
    }
}

export default new Dicas;