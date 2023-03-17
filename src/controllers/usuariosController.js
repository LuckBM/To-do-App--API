import UserModel from "../models/usuariosModel.js"
import bd from "../infra/bd.js"

const usuarioController = (app) => {

    app.get('/usuarios', (req, res) => {
        const resposta = (bd.user)
        res.send(resposta);
    });
    app.post('/usuarios', (req, res) => {
        const resposta = UserModel.armazenar(req.body)
        res.send(resposta)
    })


}
export default usuarioController

