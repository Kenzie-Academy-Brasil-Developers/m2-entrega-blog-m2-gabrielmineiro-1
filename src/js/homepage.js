import Requisicoes from "./requisicoes.js"
Requisicoes.login({
    email: "gabrie789456@outlook.com",
    password: "DALEdale2003"
})
const teste  = await Requisicoes.getPost(5).then(resposta=> 
    resposta.data.forEach(element => {
        const p = document.createElement("p")
        p.innerText = element.user.avatarUrl
        document.querySelector("body").append(p)
    }))

/* class Homepage{
    static header(){
        const header = document.createElement("header")
        const img =document.createElement("img")
        const h2 =document.createElement("h2")
        const button =document.createElement("button")


    }
    
} */