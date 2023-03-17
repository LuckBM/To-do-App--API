import TarefasModel from "../models/tarefasModel.js"

const tarefasController = (app) => {

    app.get('/usuarios', (req, res) => {
        res.send("voce esta em tarefas")
    })
    app.post('/usuarios', (req, res) => {
        const resposta = TarefasModel.armazenar(req.body)
        res.send(resposta)
    })


}
export default tarefasController