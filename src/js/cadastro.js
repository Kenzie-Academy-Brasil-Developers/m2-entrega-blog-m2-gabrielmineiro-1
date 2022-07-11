import Requisicoes from "./requisicoes.js";


class CriandoDOM {
    static paginaCadastro(){
        const div = document.getElementById("cadastro")
        const form = document.createElement("form")

        const username = document.createElement("input")
        username.classList.add("username")
        username.type = "text"
        username.placeholder= "Username"
        username.name = "username"
        username.required= "true"

        const email = document.createElement("input")
        email.classList.add("email")
        email.type = "email"
        email.placeholder= "E-mail"
        email.name = "email"
        email.required= "true"

        const avatar = document.createElement("input")
        avatar.classList.add("avatar")
        avatar.type = "text"
        avatar.placeholder= "avatar"
        avatar.name = "avatar"
        avatar.required= "true"

        const password = document.createElement("input")
        password.classList.add("password")
        password.type = "password"
        password.placeholder= "senha"
        password.name = "password"
        password.required= "true"

        const button = document.createElement("button")
        button.classList.add("button")
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
             .then(res => res.id)
             .then(res => {if(res !== undefined){
                location.href="./index/login.html"
             }}
         )})
        form.append(username,email,avatar, password, button)
        
        div.append(form)
        
    }
    }


CriandoDOM.paginaCadastro() 

