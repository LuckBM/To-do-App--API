import bd from "../infra/bd.js"

const TarefasModel = {
    modelar : (obj) => {
        return{
dados: {
            usuario: obj.usuario,
            tarefa: obj.tarefa,
            certificado: "Certificando"
},
status : 200
        }
    },
    armazenar : (obj) =>{
      bd.user.push(obj)
      return{
        dados : {msg : "Tarefa Criado com Sucesso"},
        status : 201
      }
    }
} 



export default UserModel
