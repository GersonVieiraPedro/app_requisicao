const {TouchBar} = require("electron")
const {ipcRenderer} = require('electron')
const path = require("path")

/*
document.getElementById('current').addEventListener('click', () => {

  ipcRenderer.send("print", "print")

})
*/
//Criando a Lista de requisição 
let ListaDeRequisicao = new Array()


//Resolver o LOOP desnecessario ao digitar para selecionar o item 
function CriarListasNomes() {

      //Pega o Array de Objetos do elemento Escondido no HTML
      let ArryCompletoProdutos = document.getElementById('ListaDeProdutos').Value
      let ArryCompletoNomes = document.getElementById('ListaDeNomes').Value
      let NomeProdutos = document.getElementById('NomesProdutos')
      let NomePessoas = document.getElementById('NomesPessoas')

      if(NomePessoas.value == "" || NomePessoas.value == undefined || NomePessoas.value == null ){
      //Criando estrutura para a extração e criação de um array so de nomes.
      let ArrNomes = new Array()
      let Tamanho = ArryCompletoProdutos.length;
      let indice = 0;
  
      //Criando o Array de Nomes.
      while (indice < Tamanho) {
          let ObjetoProdutos = ArryCompletoProdutos[indice]
          if (indice <= Tamanho) {
              ArrNomes.push(ObjetoProdutos.Prod)
          }
          indice = indice + 1
      }

      NomeProdutos.Value = ArrNomes

      let ArrNomesPessoas = new Array()
      let TamanhoN = ArryCompletoNomes.length;
      let indiceN = 0;
  
      //Criando o Array de Nomes.
      while (indiceN < TamanhoN) {
          let ObjetoNome = ArryCompletoNomes[indiceN]
          if (indiceN <= TamanhoN) {
            ArrNomesPessoas.push(ObjetoNome.Nome)
          }
          indiceN = indiceN + 1
      }

      NomePessoas.Value = ArrNomesPessoas
    }
}



//Escuta o imput de colaborador 
document.getElementById('Colaborador').addEventListener('keypress', () => {
  CriarListasNomes()

  //Define os elemente do DOM em variaveis 
  const campo = document.getElementById('Colaborador')
  const sugestoes = document.getElementById('ColaboradorList')

  //Cria os elementos com os nomes pesquisados
  campo.addEventListener('keyup', ({
    target
  }) => {

    const dadosDoCampo = target.value

    if (dadosDoCampo == "0" || dadosDoCampo == " " || dadosDoCampo == null) {
      return
    } else {
      if (dadosDoCampo.length > 1) {

        const autoCompleteValores = autoCompleteNomes(dadosDoCampo)
        sugestoes.innerHTML = `${
                autoCompleteValores.map((value) => { 
                return (`<option value="${value}">`) 
                }).join('')
              }`
      }
    }
  })
})


//Escuta o imput de Produtos 
document.getElementById('Produto').addEventListener('keypress', () => {

  CriarListasNomes()
  //Define os elemente do DOM em variaveis 
  const campo = document.getElementById('Produto')
  const sugestoes = document.getElementById('ProdutoList')

  //Cria os elementos com os nomes pesquisados
  campo.addEventListener('keyup', ({
    target
  }) => {

    const dadosDoCampo = target.value

    if (dadosDoCampo == "0" || dadosDoCampo == " " || dadosDoCampo == null) {
      return
    } else {
      if (dadosDoCampo.length >= 2) {

        const autoCompleteValores = autoCompleteProduto(dadosDoCampo)
        sugestoes.innerHTML = `${
                autoCompleteValores.map((value) => { 
                return (`<option value="${value}">`) 
                }).join('')
              }`
      }
    }
  })
})


//=================================== BOTOES ====================================================

//Escuta o botão adicionar 


//Escuta o botão adicionar 
document.getElementById('btn-Remove').addEventListener('click', () => {
  RemoveTudo()
})

//Escuta o botão Romove Tudo
document.getElementById('btn-Add').addEventListener('click', () => {
  AdicionarLinha()
})

//Envia um Mensagem para o main para Finalizar a Aplicação
function CloseWindow() {
  ipcRenderer.send('CloseWindow', "Close")
}


//botão para confirmar a solicitação caso o lead time estoure
document.getElementById('ConfimarSolicitacao').addEventListener('click', () => {
  
  let TxtJustificativa = document.getElementById("TxtJustificativa")
  let Texto = TxtJustificativa.value
  let T = Texto.length
  let PainelJustificativa = document.getElementById("Justificativa")
    
  if(T > 30){
    
    let x = 0
    while( x < ListaDeRequisicao.length){

      ListaDeRequisicao[x].Justificativa = Texto

      x++
    }

    EnviarRequisicao(true)
    setTimeout(()=>{ PainelJustificativa.style.visibility = "hidden"} , 2000)
  } 
    

})

//Exibe a quantidade de caracter na justificativa
document.getElementById('TxtJustificativa').addEventListener('keypress', () => {
 
  let Status = document.getElementById("Tamanho")

  let TamanhoResposta = document.getElementById("TxtJustificativa").value
      TamanhoResposta = TamanhoResposta.length

      if(TamanhoResposta > 30){
        Status.innerHTML = `${TamanhoResposta}/30`
        Status.style.color = "green"
        Status.style.fontWeight = 'bold'
      }else{
        Status.innerHTML = `${TamanhoResposta}/30`
        Status.style.color = "red"
        Status.style.fontWeight = 'bold'
      }

})


//formata a data 
function DateUTP8(DataSting) {
  return new Date(`${DataSting.substring(6,10)}-${DataSting.substring(3,5)}-${DataSting.substring(0,2)} `)
}


//Envia a lista de Requisição Para o Main solicitando uma verificação dos item para LEAD TIME
document.getElementById('btn-Send').addEventListener('click', () => {

  if (ListaDeRequisicao != "") {

    ipcRenderer.send('Verificar', ListaDeRequisicao)

  }

})


//Recebe uma lista de item verificados com as datas de ultima solicitação no banco 
ipcRenderer.on('Verificado', (event, arg) => {
  console.log(arg)

  VerificarLeadTime(arg)

})


//Recebe  Mensagem no Main 
ipcRenderer.on('Mensagem', (event, arg) => {
ModelMenssagem(arg)
})



//Pega o elemento que foi precionado da tabela pela classe
let tabela = document.getElementById('TabelaReq');
tabela.addEventListener('click', function (e) {
  if (temClasse(e.target, 'bi')) {
    let elem = e.target

    let Linha = elem.tagName == "BUTTON" ?
      elem.parentNode.parentNode.rowIndex :
      elem.parentNode.parentNode.parentNode.parentNode.rowIndex
    removerLinha(Linha)

    let Valor = elem.tagName == "BUTTON" ?
      elem.parentNode.parentNode.cells[4].innerHTML :
      elem.parentNode.parentNode.parentNode.parentNode.cells[4].innerHTML
    Valor = Valor.substring(4, Valor.length)
    RemoverValorTotal(Valor)

  }
})

// Ativa a animação de exibir os detalhes do Usuario 
function UserDetalhes() {
  const Container = document.getElementById("UC");
  UserLogado(Container.value)

  const Detalhes = document.querySelector(".Detalhes")

  const Nome = document.querySelector(".UserNome").innerHTML

  let Tamanho = Nome.length

  let tamanho = Container.style.width
  if (tamanho == 60 || tamanho == "" || tamanho == "60px") {
    Container.style.animation = ""
    setTimeout(() => Container.style.animation = "ExibirDetalhes 1s ease ")
    Container.style.opacity = "1"
    //Container.style.visibility = "visible"
    Container.style.width = "210px"
    Container.className = "UserConteiner"
    if (Tamanho > 22) {
      Detalhes.style.marginTop = "5px"
    }

  } else {
    const Container = document.getElementById("UC");
    Container.style.animation = ""
    setTimeout(() => Container.style.animation = "ExibirDetalhes 1s ease reverse")
    Container.style.opacity = "0"
    //Container.style.visibility ="hidden"
    Container.style.width = "60px"
    Container.className = "UserConteinerClose"
  }
}


//Procura o nome e setor do usuario e insere no HTML
function UserLogado(Chapa) {
  ArrayPessoas = document.getElementById('ListaDeNomes').Value
  let User = ArrayPessoas.filter(pessoa => pessoa.Chapa == Chapa);

  let FotoUser = document.querySelector(".UserFoto")
  document.querySelector(".UserNome").innerHTML = User[0].Nome
  document.querySelector(".Setor").innerHTML = User[0].Setor
  FotoUser.setAttribute("src", `//bbrdskadm13/host/05-Bancos De Dados/Imagem/Banco de fotos/${Chapa}.jpg`)

}



//Logica de leadTime
function VerificarLeadTime(ListaDeDatas){

  let ListaVerificada = ListaDeDatas
  let i = 0
  let Tamanho = ListaVerificada.length
  let Status = "vazio"

  while (i < Tamanho) {
       
    let Valid = ListaVerificada[i].ID
    if (Valid != "@") {

      let Mate = ListaVerificada[i].ID

      Mate = Mate.substring(9, Mate.length)
      let Produto = ListaDeRequisicao.filter(Produtos => Produtos.Material == Mate);

      let DiasLimite = Produto[0].Time
      let DataRegistro = ListaVerificada[i].Data + " "

      DataRegistro = new Date(DataRegistro)


      let DataHoje = new Date()

      let LeadTime = (DataHoje - DataRegistro)
      LeadTime = (LeadTime / 1000 / 60 / 60 / 24).toFixed(0)
      LeadTime = LeadTime - DiasLimite

      if( LeadTime < 0 && Status == "vazio" ){
        Status = "Fora Do LeadTime"
      }
      

      let x = 2
      while (x < (Tamanho + 2)) {
        SKUMaterial = tabela.rows[x].cells[0].innerHTML
        NomeColaborador = tabela.rows[x].cells[5].innerHTML

        let ItemRequisicao = ListaDeRequisicao.filter(Pedido => Pedido.Nome == NomeColaborador && Pedido.Material == SKUMaterial)
        
        let index = ListaDeRequisicao.indexOf(ItemRequisicao[0])
        ListaDeRequisicao[index].Dias = LeadTime
        

        let Chapa = ItemRequisicao[0].Chapa

        let ID = Chapa + SKUMaterial

        if (ID == ListaVerificada[i].ID) {

          let CellLead = tabela.rows[x].cells[6]
          CellLead.innerHTML = LeadTime


          if (LeadTime >= 0) {
            //Celulas Positivas VERDE
            CellLead.style.background = '#7bff99'
            CellLead.style.fontWeight = 'bold'
            break
          } else {
            //Celulas Negativa VERMELHO
            CellLead.style.background = '#ff6e7c'
            CellLead.style.fontWeight = 'bold'
            break
          }
        }
        x = x + 1
      }
    }
    i = i + 1
  }

  i = 2
  while (i < (Tamanho + 2)) {
    VLead = tabela.rows[i].cells[6].innerHTML

    if (VLead == '@') {

      M = tabela.rows[i].cells[0].innerHTML
      N = tabela.rows[i].cells[5].innerHTML

      let ListReq = ListaDeRequisicao.filter(P => P.Nome == N && P.Material == M)
      let I = ListaDeRequisicao.indexOf(ListReq[0])
      ListaDeRequisicao[I].Dias = 0
      

      Lead = tabela.rows[i].cells[6]
      Lead.style.background = '#78c0fd'
      Lead.innerHTML = 'New'
    }
    i = i + 1
  }

  if(Status == "Fora Do LeadTime"){

    let PainelJustificativa = document.getElementById("Justificativa")
    
    PainelJustificativa.style.visibility = "visible"
  }else{

    EnviarRequisicao(true)
  }

}

//envia a requisição para o main
function EnviarRequisicao(validar){

  if(validar == true){

    AdicionarHeader()

    AdicionarNumeroPedido()

    //Envia um mensagem para o receptor "Main.js", no canal "Requisição", Msg = Array de Objeto requisição
    ipcRenderer.send('Requsição', ListaDeRequisicao)

    

    //RemoveTudo(true)

  }
}

//apos imprimir remove tudo 
function myFunction() {
  alert("Pagina foi Impressa");
  RemoveTudo(true)

}

var modal = document.getElementById("myModal");


//botão de X close do model e manda para o main exibir o painel de impressao
document.getElementById('close').addEventListener('click', () => {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";

  ipcRenderer.send("print", "print")
})





function VerificarChapa(Chapa) {

  ipcRenderer.send("VerificarChapa", Chapa)

  ipcRenderer.on("StatusChapa", (event, arg) => {
      return arg
  })
}

function RegistrarNovoUsuario() {
  let Chapa = document.getElementById("RChapa").value
  let Status = VerificarChapa(Chapa)
  let Senha = document.getElementById("RPass").value
  let ConfSenha = document.getElementById("RPassConfirmar").value
  let Usuario = document.getElementById("RName").value
  let info = document.getElementById("RDivInfoErro")



  if (Status == "Chapa Não Encontrada") {
      alert(Status + "/n Provalmente a Chapa foi digitada errad ! /n Procute o Setor de RH para validar Chapa")

  } else if (Status == "Usuario Já Cadastrado") {
      alert(Status + "/n Chapa encontrada nos Registro, Verifique que a Chapa não está Errada")

  } else {

      if (Senha == ConfSenha) {
          let User = {
          Nome: Usuario,
          Senha: Senha,
          Chapa: Chapa
          }


          ipcRenderer.send("RegistrarUsuario", User )
      } else {
          info.style.visibility = "Visible"
      }
  }

}