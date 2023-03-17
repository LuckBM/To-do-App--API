//class UserModel {
    //constructor(obj) {
    //    nome = obj.nome
  //      email = obj.email
//    }
  //modelar(obj){
        
        //return{
        //    nome : obj.nome,
      //      email : obj.email
    //    }
  //  }
//}

//const user = UserModel.modelar(obj) 

import bd from "../infra/bd.js"

const UserModel = {
    modelar : (obj) => {
        return{
dados: {
            nome: obj.nome,
            email: obj.email,
            certificado: "Certificando"
},
status : 200
        }
    },
    armazenar : (obj) =>{
      bd.user.push(obj)
      console.log(bd.user)
      return{
        dados : {msg : "User Criado com Sucesso"},
        status : 201
      }
    }
} 



export default UserModel
