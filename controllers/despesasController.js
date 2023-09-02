let despesas = [
    {id: 1, nome: "Alugel", valor: 800},
    {id: 2, nome: "Gasolina", valor: 300}
]
module.exports = {
    getAllDespesas : function(req, res, next){
        res.setHeader("content-type", "application/json");
        res.status(200).json(despesas);
    },
    getDespesasByID : function(req, res, next){
        let id = req.params.id

       for(i = 0; i < despesas.length; i++){
        if(id == despesas[i].id){
            return res.status(200).json(despesas[i]);
        }
       }
       return res.status(404).json({error: "O ID informado não existe!"});
    },
    addDespesa : function(req, res, next){
        let id = 1;
        if (despesas.length > 0) {
            // Use o método reduce para encontrar o maior ID
            let ultimoId = despesas.reduce((maxId, despesa) => {
                return Math.max(maxId, despesa.id);
            }, despesas[0].id); // Inicialize com o ID do primeiro elemento
        
            id = ultimoId + 1;
        } else {
            id = 1;
        }
        let nome  = req.body.nome;
        let valor  = req.body.valor;

        if (nome != "" && nome != undefined && valor != "" && valor != undefined){
            let despesa = {
                id : id,
                nome: nome,
                valor: valor
            }

            despesas.push(despesa)
            res.status(200).json(despesa);
        }else{
            res.status(400).json({"Erro": "Informe um Nome e um valor para a despesa!"})
        }

    },
    deleteDespesa : function(req, res, next){
        let id = req.params.id
        if (id != "" && id != undefined){
            for(i = 0; i < despesas.length; i++){
                if(id == despesas[i].id){
                    despesas.splice(i, 1);
                    console.log(despesas)
                    return res.status(200).json({msg : "Despesa removida!"});
                }
               }
               return res.status(404).json({error: "O ID informado não existe!"});
        }
    }
}