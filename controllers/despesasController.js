let despesas = [
    {id: 1, nome: "Alugel", categoria: "Moradia", valor: 800},
    {id: 2, nome: "Gasolina", categoria: "Mobilidade", valor: 300}
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
        let categoria  = req.body.categoria;
        if(categoria == undefined){
            categoria = "Outros"
        }

        if (nome != "" && nome != undefined && valor != "" && valor != undefined){
            let despesa = {
                id : id,
                nome: nome,
                categoria: categoria,
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
    },
    editeDespesa : function(req, res, next){
        let id = req.params.id
        if (id != "" && id != undefined){
            for(i = 0; i < despesas.length; i++){
                if(id == despesas[i].id){
                    
                    let novoNome = req.body.nome;
                    let novoValor = req.body.valor;
                    let novaCategoria = req.body.categoria;


                    // if (novoNome != "" && novoNome != undefined &&  novoValor == undefined){
                    //     despesas[i].nome = novoNome;
                    //     return res.status(200).json(despesas[i])
                    // }
                    // else if(novoValor != "" && novoValor != undefined && novoNome == undefined){
                    //     despesas[i].valor = novoValor;
                    //     return res.status(200).json(despesas[i])

                    // }else if(novoNome != "" && novoNome != undefined && novoValor != "" && novoValor != undefined){

                    //     despesas[i].nome = novoNome;
                    //     despesas[i].valor = novoValor;
                    //     return res.status(200).json(despesas[i])

                    // }else{
                    //     return res.status(400).json({Erro: "Informe o novo nome e/ou novo valor da despesa!"})
                    // }
                    

                    if(novoNome !== "" && novoNome !== undefined){
                        despesas[i].nome = novoNome;
                    }

                    if (novoValor !== "" && novoValor !== undefined){
                        despesas[i].valor = novoValor;
                    }

                    if (novaCategoria !== "" && novaCategoria !== undefined){
                        despesas[i].categoria = novaCategoria;
                    }

                    return res.status(200).json(despesas[i])
                }
            }
            return res.status(400).json({Erro: "ID não cadastrado não permite alteração!"})
        }
        return res.status(400).json({Erro: "Informe o ID a ser alterado!"})
    }
}
