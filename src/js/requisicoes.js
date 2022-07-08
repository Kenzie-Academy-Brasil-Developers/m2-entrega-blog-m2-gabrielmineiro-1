class Requisicoes{
    static url = "https://blog-m2.herokuapp.com/users/register"
    
  
    
    static async cadastro(user) {
        const response = await fetch(
          "https://blog-m2.herokuapp.com/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        );
        const data = await response.json();
        window.localStorage.setItem("imagem", user.avatarUrl)
        console.log(data);
        return data;
      } 
      
      static async login(loginData){
        const response1 = await fetch("https://blog-m2.herokuapp.com/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(loginData),
        }
        );
        const data1 = await response1.json()
        console.log(data1)
        window.localStorage.setItem("id", data1.userId)
        window.localStorage.setItem("token", data1.token)
        return data1
      }
    
    static async getUserByID(id){
        const token = window.localStorage.getItem("token")
        const response2 = await fetch(`https://blog-m2.herokuapp.com/users/${id}`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const resposta = await response2.json()
        console.log(resposta)
        return resposta
    }

    static async getPost(num){
        const token = window.localStorage.getItem("token")
        const response3 = await fetch(`https://blog-m2.herokuapp.com/posts?page=${num}`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const retorno = await response3.json()
        console.log(retorno.data)
        return retorno
    }
    static async getPostEspecifico(id){
        const token = window.localStorage.getItem("token")
        const response4 = await fetch(`https://blog-m2.herokuapp.com/posts/${id}`,{
            method: "GET",
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            }
        })
        const retorno = await response4.json()
        console.log(retorno)
        return retorno
    }
    static async criarPost(post){
        const token = window.localStorage.getItem("token")
        const response5 = await fetch("https://blog-m2.herokuapp.com/posts",{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(post)
        })
        const retorno = await response5.json()
        console.log(retorno)
        return retorno
    }
    
    static async alterarPost(novoPost,id){
         const token = window.localStorage.getItem("token")
         const response6 = await fetch(`https://blog-m2.herokuapp.com/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(novoPost)
         })
         const retorno = await response6.json()
        console.log(retorno)
        return retorno
    }
}


export default Requisicoes