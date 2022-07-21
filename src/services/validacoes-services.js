class ValidaServices {
    static validaAutor(autor){
        if (autor !== "" && autor !== " "){
            return true
        } else {
            return false
        }
    }

    static validaDica(dica){
        if (dica !== "" && dica !== " "){
            return true
        } else {
            return false
        }
    }
}
export default ValidaServices;
