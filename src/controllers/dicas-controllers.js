class Dicas {
    rotas(app){
        app.get("/dicas", (req, res) => {
           res.send("<h1>Deu certo!!!</h1>")
        })
    }
}

export default new Dicas;