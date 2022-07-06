class Requisicoes{
    static url = "https://blog-m2.herokuapp.com/users/register"
    static async cadastro(objCadastro){
        return await fetch(this.url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objCadastro)
        })
        .then(resposta => resposta.json())
        .then(resposta => resposta)
        .catch(error => console.log(error))
    }
}

export default Requisicoes