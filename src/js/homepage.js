import Requisicoes from "./requisicoes.js"
 Requisicoes.login({
    email: "gabrie789456@outlook.com",
    password: "DALEdale2003"
})
class Homepage{
    static async header(){
        const append = document.getElementById("append")
        const name = window.localStorage.getItem("id")
        const user =await Requisicoes.getUserByID(name).then(response =>  response.username)
        const avatar  =await Requisicoes.getUserByID(name).then(response => response.avatarUrl)

        const header = document.createElement("header")
        const img =document.createElement("img")
        const h2 =document.createElement("h2")
        const button =document.createElement("button")
        img.classList.add("imagemCabecalho")
        h2.classList.add("nome_usuario")
        button.classList.add("logout")


        h2.innerHTML = user
        img.src= avatar
        button.innerHTML = "logout"

        header.append(img, h2, button)
        append.append(header)
    }
    
    static async textArea(){
        const body = document.querySelector("body")
        const div = document.createElement("div")
        const input = document.createElement("input")
        const button =document.createElement("button")
        const img = document.createElement("img")

        div.classList.add("post")
        input.type= "textarea"
        input.placeholder ="Fala que eu te escuto" 
        input.classList.add("textarea")
        button.classList.add("addPost")
        img.src= "../../img/+.png"

        button.addEventListener("click", async ()=>{
           const data=  await Requisicoes.criarPost({
                content : input.value
            }).then(response => response.id)
            .then(response => Requisicoes.getPost(response.id)
            .then(response => response.data.forEach(element => {
                this.timeLine(element.content, element.user.avatarUrl, element.user.username, element.id)
            })))
            .catch(err => console.log(err))
            input.value=""
            return data

        })

        button.append(img)

        div.append(input,button)

        body.append(div)
    }
    static async timeLine(texto, avatar, user, id){
        const body = document.querySelector("body")

        const div = document.createElement("div")
        div.classList.add("timeLine")

        const img = document.createElement("img")
        img.classList.add("imgPost")
        img.src= avatar

        const section = document.createElement("section")
        section.classList.add("containerPost")

        const h3 = document.createElement("h3")
        h3.innerHTML= user

        const p = document.createElement("p")
        p.classList.add("textPost")
        p.innerHTML = texto

        const button1 = document.createElement("button")
        button1.classList.add("editar")
        button1.innerHTML= "Editar"
        button1.setAttribute("id",id)

        const button2 = document.createElement("button")
        button2.classList.add("apagar")
        button2.innerHTML= "Apagar"

        button2.addEventListener("click", async ()=>{
            await Requisicoes.delete(button1.id)
            
        })

        button1.addEventListener("click", async ()=>{
            const body = document.querySelector("body")
            const div = document.createElement("div")
            const h3 = document.createElement("h3")
            const input = document.createElement("input")
            const button = document.createElement("button")

            button.classList.add("buttonModal")
            input.type = "textarea"
            input.classList.add("modalAlterar")

            button.addEventListener("click",()=>{
                 Requisicoes.alterarPost({
                    content : input.value
                }, button1.id)
                div.style.display ="none"
            })

            div.classList.add("modal")
            h3.classList.add("tituloModal")
            h3.innerHTML = "Altere aqui seu post"
            button.innerHTML= "Alterar"
            div.append(h3, input, button)
            body.append(div)
            })

            
            section.append(h3,p)
            div.append(img,section, button1, button2)

            body.append(div)


    }
   
}
Homepage.header()
Homepage.textArea()