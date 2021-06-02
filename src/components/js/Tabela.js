function AdicionarLinha() {

  //Valor 
  let Calocaborador = document.getElementById('Colaborador').value
  let Produto = document.getElementById('Produto').value
  let Qtd = document.getElementById('Quantidade').value
  let Motivo = document.getElementById('Motivo').value

  //Tabela
  let Tabela = document.getElementById('TabelaReq');
  //let numeroDeLinhas = Tabela.rows.lenght;
  let Linha = Tabela.insertRow(-1);

  //Celulas 
  let CellMaterial = Linha.insertCell(0);
  let CellProduto = Linha.insertCell(1);
  let CellQtd = Linha.insertCell(2);
  let CellPreco = Linha.insertCell(3);
  let CellValor = Linha.insertCell(4);
  let CellCalaborador = Linha.insertCell(5);
  let CellLedtime = Linha.insertCell(6);
  let CellMotivo = Linha.insertCell(7);
  let CellButton = Linha.insertCell(8);

  //CellMaterial.innerHTML =
  CellProduto.innerHTML = Produto.toUpperCase()
  CellQtd.innerHTML = Qtd
  //CellPreco.innerHTML =
  //CellValor.innerHTML =
  CellCalaborador.innerHTML = Calocaborador.toUpperCase()
  //CellLedtime.innerHTML =
  CellMotivo.innerHTML = Motivo
  CellButton.innerHTML = `<button  onclick="removerLinha()"  id="btnRemove" class=" btn-id btn btn-danger btn-sm"
  type="button">X</button>`


}
//Remover Linha da Tabela
function removerLinha(Linha) {
  document.getElementById('TabelaReq').deleteRow(Linha);
}

//Escua o evemto de click do botão 
document.getElementById('btn').addEventListener('click', () => {
  AdicionarLinha()
})

//pega o elemento clicado na tela por nome de classe
function temClasse(elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
}

//Pega o elemento que foi precionado da tabela pela classe
let tabela = document.getElementById('TabelaReq');


tabela.addEventListener('click', function (e) {
  if (temClasse(e.target, 'btn-id')) {
    let elem = e.target
    let Linha = elem.parentNode.parentNode.rowIndex
    removerLinha(Linha)
  }
})



function autoComplete(lista) {

  let DivEscondida = document.getElementById('ListaDeNomes')
  //const Arr = ['GERSON VIEIRA PEDRO','GERDSON CARLOS','GABRIELA DIAS','GILSON RODRIGUES', 'NIKOLAS MARTINS', 'PEDRO HENRIQUE', 'VITORIA RODRIGUES']

  let Arr = DivEscondida.Value

  const listaMinusculo = lista.toUpperCase()
  //Procura o valor digitado no arrey e inputa na variavel
  return Arr.filter( ArrayComFilter  => (ArrayComFilter.substring(0, lista.length) == listaMinusculo));

  /*
  return Arr.filter((valor) => {
    const valorMinusculo = valor.toLowerCase()
    const listaMinusculo = lista.toLowerCase()
    return valorMinusculo.includes(listaMinusculo)
  })
  */
}



//Escuta o imput de colaborador 
document.getElementById('Colaborador').addEventListener('change', () => {


  //Define os elemente do DOM em variaveis 
  const campo = document.getElementById('Colaborador')
  const sugestoes = document.getElementById('ColaboradorList')

  //Cria os elementos com os nomes pesquisados
  campo.addEventListener('input', ({target}) => {

    const dadosDoCampo = target.value

    if (dadosDoCampo == "0" || dadosDoCampo == " " || dadosDoCampo == null) {
      return
    } else {
      if (dadosDoCampo.length) {

        const autoCompleteValores = autoComplete(dadosDoCampo)
        sugestoes.innerHTML = `${

          autoCompleteValores.map((value) => { 
          return (`<option value="${value}">`) 

          }).join('')
        }`
      }
    }
  })
})