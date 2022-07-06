import Requisicoes from "./requisicoes.js";

 /* class CriandoDOM{
    static paginaCadastro(){
        const div = document.getElementById("cadastro")
        const form = document.createElement("form")

        const username = document.createElement("input")
        username.type = "text"
        username.placeholder= "Username"
        username.name = "username"
        username.required= "true"

        const email = document.createElement("input")
        email.type = "email"
        email.placeholder= "E-mail"
        email.name = "email"
        email.required= "true"

        const avatar = document.createElement("input")
        avatar.type = "text"
        avatar.placeholder= "avatar"
        avatar.name = "avatar"
        avatar.required= "true"

        const password = document.createElement("input")
        password.type = "password"
        password.placeholder= "senha"
        password.name = "password"
        password.required= "true"

        const button = document.createElement("button")
        button.type = "submit"
        button.innerText = "Cadastrar"
        
        
        form.addEventListener("submit", async (event)=>{
            event.preventDefault()
            const dadosCadastro ={
                "username" : username.value,
                "email": email.value,
                "avatarUrl": avatar.value,
                "password":  password.value
            }
            await Requisicoes.cadastro(JSON.stringify(dadosCadastro))
        })
        form.append(username,email,avatar, password, button)
        div.append(form)
    }
}
CriandoDOM.paginaCadastro() 

 */
console.log( await Requisicoes.cadastro({
    "username" : "ki",
    "email": "b@hll",
    "avatarUrl": "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/07/neytiri_in_avatar_2-wide-do-we-really-need-avatar-2.jpeg",
    "password":  "Abc950"
}))