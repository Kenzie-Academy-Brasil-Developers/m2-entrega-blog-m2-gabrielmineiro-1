import Requisicoes from "./requisicoes.js"

class CriandoForm{
    static login(){
        const div = document.querySelector(".login")
        const form = document.createElement("form")

        const email = document.createElement("input")
        email.type = "email"
        email.placeholder= "E-mail"
        email.name = "email"
        email.required= "true"

        const password = document.createElement("input")
        password.type = "password"
        password.placeholder= "senha"
        password.name = "password"
        password.required= "true"

        const button = document.createElement("button")
        button.type = "submit"
        button.innerText = "Entrar"

        form.append(email,password, button)
        div.append(form)

        form.addEventListener("submit", async (event)=>{
            event.preventDefault()
            const dadosCadastro ={
                email: email.value,
                password: password.value
            }
            await Requisicoes.login(dadosCadastro)
            .then(res => res.userId)
            .then(res => {if(res !== undefined){
               location.href="./src/index/homepage.html"
            }})
    })}
}
CriandoForm.login()
