
//Criando o Objeto Pessoas
function Produto() {

    this.Add = (Material = Number, Descricao = String , PrecoUnitatio = Number, Time = Number) => {

        let Prod = new Object()
         Prod = {
            Material: Material,
            Prod: Descricao,
            PrecoUnitatio: PrecoUnitatio,
            Time: Time
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

//Criando um Objeto para salvar as informações de registro.
//Objeto de requisição 
function Requisicao() {

  this.Add = (Pedido, ID, Material, Descricao, Quantidade, PrecoUn, Valor, Data, Hora, Chapa, Nome, Gestor, Setor, Vistoria, Username, Motivo, Time, Dias) => {

    let Req = new Object()
    Req = {
      Pedido: Pedido,
      ID: ID,
      Material: Material,
      Desc: Descricao,
      Quantidade: Quantidade,
      PrecoUn: PrecoUn,
      Valor: Valor,
      Data: Data,
      Hora: Hora,
      Chapa: Chapa,
      Nome: Nome,
      Gestor: Gestor,
      Setor: Setor,
      Vistoria: Vistoria,
      Username: Username,
      Motivo: Motivo,
      Time: Time,
      Dias: Dias 
    }
    return (Req)
  }
}



//Exportando os objetos Globalmente 
module.exports ={
    Produto,
    Colaborador,
    Requisicao
   
}