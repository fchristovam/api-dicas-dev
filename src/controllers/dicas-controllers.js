import ValidaServices from "../services/validacoes-services.js"
import DbMet from "../utils/metodos-database.js"

class Dicas {
    rotas(app){
        app.get("/dicas", (req, res) => {
            const resposta = DbMet.retorno()
            res.status(200).json(resposta)
        })

        app.post("/dicas", (req, res) => {
            const validacaoAutor = ValidaServices.validaAutor(req.body.autor)
            const validacaoDica = ValidaServices.validaDica(req.body.dica)

            if (validacaoAutor === true && validacaoDica === true){
                const dicaNova = req.body
                const resposta = DbMet.guardar(dicaNova)
                res.status(200).json(resposta)
            } else {
                res.status(200).json({"erro" : "objeto inválido"})
            }
            // res.status(200).json({"nome" : "Flávio"})
        })
    }
}

export default new Dicas;