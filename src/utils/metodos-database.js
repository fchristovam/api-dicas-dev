import DbDicas from "../infra/dicas-database.js"
class DbMet {
    guardar(dica){
        DbDicas.push(dica)
        return DbDicas
    }
    retorno(){
        const random = DbDicas[Math.floor(Math.random() * DbDicas.length)]
        return random
    }
}
export default new DbMet;