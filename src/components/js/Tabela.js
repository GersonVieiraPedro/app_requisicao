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

function CloseWindow (){
  ipcRenderer.send('CloseWindow',"Close")
}


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

    let Valor = elem.tagName == "BUTTON" ?
    elem.parentNode.parentNode.cells[4].innerHTML :
    elem.parentNode.parentNode.parentNode.parentNode.cells[4].innerHTML 
    Valor = Valor.substring(4, Valor.length)
    RemoverValorTotal(Valor)
    
  }
})

document.getElementById("UC").addEventListener("mouseover", ()=>{
  const Container = document.getElementById("UC");
  Container.style.animation =""
  setTimeout(()=> Container.style.animation ="ExibirDetalhes 2s ease ")
  Container.style.opacity = "1 !important"
  Container.style.visibility = "visible !important"
  Container.style.width = "200px !important"
 
})


document.getElementById("UC").addEventListener("mouseout", ()=>{
  const Container = document.getElementById("UC");
  Container.style.animation =""
  setTimeout(()=> Container.style.animation ="ExibirDetalhes 2s ease reverse")
  Container.style.opacity = "0 !important"
  Container.style.visibility ="hidden !important"
  Container.style.width = "60px !important"
})