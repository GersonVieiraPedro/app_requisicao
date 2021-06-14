const {TouchBar} = require("electron")
const {ipcRenderer} = require('electron')
const path = require("path")
//


//Criando a Lista de requisição 
let ListaDeRequisicao = new Array()

//|||||||||||||||||||||||||||||||||||||||||--PAINEL--|||||||||||||||||||||||||||||||||||||||||||||

//=================================== COMPOS INPUT ====================================================


//Escuta o imput de colaborador 
document.getElementById('Colaborador').addEventListener('keypress', () => {

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
      if (dadosDoCampo.length) {

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
document.getElementById('btn-Remove').addEventListener('click', () => {
  RemoveTudo()
})

//Escuta o botão Romove Tudo
document.getElementById('btn-Add').addEventListener('click', () => {
  AdicionarLinha()
})



//Escuta o Botão Solicitar
document.getElementById('btn-Send').addEventListener('click', () => {

  AdicionarNumeroPedido()

  //Envia um mensagem para o receptor "Main.js", no canal "Requisição", Msg = Array de Objeto requisição
  ipcRenderer.send('Requsição', ListaDeRequisicao)

  //Recebe  Mensagem no Main 
  ipcRenderer.on('Mensagem', (event, arg) => {
    ModelMenssagem(arg)
  })

   RemoveTudo(true)

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
  }
})