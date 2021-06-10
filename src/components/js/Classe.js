
//Criando o Objeto Pessoas
function Produto() {

    this.Add = (Material = Number, Descricao = String , PrecoUnitatio = Number) => {

        let Prod = new Object()
         Prod = {
            Material: Material,
            Prod: Descricao,
            PrecoUnitatio: PrecoUnitatio
        }
        return (Prod)
    }

}

//Criando o Objeto colaborador 
function Colaborador(){

    this.Add = (Chapa = Number, Nome = Text, Gestor = Text, Setor = Text, Cd = Text) =>{
       
       let Pessoa = new Object()
        Pessoa = {
        Chapa : Chapa,
        Nome : Nome,
        Gestor : Gestor,
        Setor: Setor,
        Cd : Cd
        }
        return(Pessoa)
    }
}

/*Criando um Objeto para salvar as informações de registro.
function Requisicao(){

    this.Add = (Material = Number, Descricao = String , Quantidade = Number, PrecoUn = Number, Valor = Number, Data = Date,
                Hora = Date, Chapa = Number, Nome = Text, Vistoria = Text, Maquina = Text, Username = Text) =>{
        
        let Req = new Object()
        Req ={
            Material: Material,
            Desc: Descricao,
            Quantidade: Quantidade,
            PrecoUn : PrecoUn,
            Valor: Valor,
            Data: Data,
            Hora: Hora,
            Chapa: Chapa,
            Nome: Nome,
            Vistoria: Vistoria,
            Maquina: Maquina,
            Username: Username
        }
        return(Req)
    }
}



/*
let Produtos = new Produto()

console.log(Produtos.Add(10,"File Manga",14.75))
*/

//Exportando os objetos Globalmente 
module.exports ={
    Produto,
    Colaborador
   
}