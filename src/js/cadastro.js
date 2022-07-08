import Requisicoes from "./requisicoes.js";


class CriandoDOM {
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
                username : username.value,
                email: email.value,
                avatarUrl: avatar.value,
                password:  password.value
            }
             await Requisicoes.cadastro(dadosCadastro)
            // location.href = "./login.html"
        })
        form.append(username,email,avatar, password, button)
        div.append(form)
    }
}


CriandoDOM.paginaCadastro() 

