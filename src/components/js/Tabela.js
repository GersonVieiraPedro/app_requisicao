//Objeto de requisição 
function Requisicao() {

  this.Add = (ID, Material, Descricao, Quantidade, PrecoUn, Valor, Data, Hora, Chapa, Nome, Gestor, Setor, Vistoria, Username, Motivo) => {

    let Req = new Object()
    Req = {
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
      Motivo: Motivo
    }
    return (Req)
  }
}

//Criando a Lista de requisição 
let ListaDeRequisicao = new Array()

//|||||||||||||||||||||||||||||||||||||||||--PAINEL--|||||||||||||||||||||||||||||||||||||||||||||

//=================================== NOMES ====================================================

//AutoComplete do campo Nomes 
function autoCompleteNomes(lista) {

  let DivEscondida = document.getElementById('ListaDeNomes')
  //const Arr = ['GERSON VIEIRA PEDRO','GERDSON CARLOS','GABRIELA DIAS','GILSON RODRIGUES', 'NIKOLAS MARTINS', 'PEDRO HENRIQUE', 'VITORIA RODRIGUES']

  //Pega o Array de Objetos do elemento Escondido no HTML
  let Arr = DivEscondida.Value

  //Criando estrutura para a extração e criação de um array so de nomes.
  let ArrNomes = new Array()
  let Tamanho = Arr.length;
  let indice = 0;

  //Criando o Array de Nomes.
  while (indice < Tamanho) {
    let ObjetoColaborador = Arr[indice]
    if (indice <= Tamanho) {
      ArrNomes.push(ObjetoColaborador.Nome)
    }
    indice = indice + 1
  }

  const listaMinusculo = lista.toUpperCase()
  //Procura o valor digitado no arrey e inputa na variavel
  return ArrNomes.filter(ArrayComFilter => (ArrayComFilter.substring(0, lista.length) == listaMinusculo));

}


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

//=================================================================================================

//=================================== PRODUTOS ====================================================


//AutoComplete do campo Produtos 
function autoCompleteProduto(lista) {

  //Pega o Array de Objetos do elemento Escondido no HTML
  let Arr = document.getElementById('ListaDeProdutos').Value

  //Criando estrutura para a extração e criação de um array so de nomes.
  let ArrNomes = new Array()
  let Tamanho = Arr.length;
  let indice = 0;

  //Criando o Array de Nomes.
  while (indice < Tamanho) {
    let ObjetoProdutos = Arr[indice]
    if (indice <= Tamanho) {
      ArrNomes.push(ObjetoProdutos.Prod)
    }
    indice = indice + 1
  }

  const listaMinusculo = lista.toUpperCase()
  //Procura o valor digitado no arrey e inputa na variavel
  return ArrNomes.filter(ArrayComFilter => (ArrayComFilter.substring(0, lista.length) == listaMinusculo));

}

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


//=================================================================================================



//=================================== BOTOES ====================================================

function RemoveTudo() {
  let Tamanho = ListaDeRequisicao.length + 1
  for (Tamanho; Tamanho >= 2; Tamanho--) {
    removerLinha(Tamanho)
  }
}

//Escuta o botão adicionar 
document.getElementById('btn-Remove').addEventListener('click', () => {
  RemoveTudo()
})

//Escuta o botão Romove Tudo
document.getElementById('btn-Add').addEventListener('click', () => {
  AdicionarLinha()
})

function AdicionarLinha() {
  let st = ValidarTextBox()
  if (st == "vazio") {
    return
  } else {

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


    //Pega o Array de Objetos do elemento Escondido no HTML
    let ArrayProdutos = document.getElementById('ListaDeProdutos').Value
    let ArrayPessoas = document.getElementById('ListaDeNomes').Value

    let dominio = document.getElementById('ListaDeNomes').baseURI
    let T = dominio.indexOf("/", 17)
    let username = dominio.substring(17, T)

    //Filtra o Objeto do array
    let ObjetoProduto = ArrayProdutos.filter(produto => produto.Prod == Produto);
    ObjetoProduto.forEach(produto => {
      return ProdutoSelecionado = produto
    });


    let ObjetoPessoas = ArrayPessoas.filter(pessoa => pessoa.Nome == Calocaborador);
    ObjetoPessoas.forEach(pessoa => {
      return PessoaSelecionado = pessoa
    });

    let Q = Number.parseFloat(Qtd).toFixed(2) //Transforma a String Qtd em Numero e seta em duas casas decimais
    let p = ProdutoSelecionado.PrecoUnitatio.toString() //Extrai o preço unitario do objeto
    let Prec = p.indexOf(",") > 0 ?
      p.replace(",", ".") :
      p;
    let Preco = Number.parseFloat(Prec).toFixed(2) //Transforma a String Preco em Numero e seta em duas casas decimais
    let Valor = (Q * Preco).toFixed(2) //Realiza a multiplicação



    CellMaterial.innerHTML = ProdutoSelecionado.Material
    CellProduto.innerHTML = Produto.toUpperCase()
    CellQtd.innerHTML = Qtd
    CellPreco.innerHTML = `R$: ${Preco}`
    CellValor.innerHTML = `R$: ${Valor}`
    CellCalaborador.innerHTML = Calocaborador.toUpperCase()
    CellLedtime.innerHTML = 12 //led precisa vim da tabela req
    CellMotivo.innerHTML = Motivo.substring(0, 1)
    CellButton.innerHTML = `<button onclick="removerLinha()" id="btnRemove" class="btn btn-id icon-sm btn-icons btn-rounded btn-danger btn-sm" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                            </button>`


    function adicionaZero(numero) {
      if (numero <= 9)
        return "0" + numero;
      else
        return numero;
    }

    let dataAtual = new Date(); //29/01/2020
    let dataAtualFormatada = (adicionaZero(dataAtual.getDate().toString()) + "/" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "/" + dataAtual.getFullYear());
    let Hora = `${adicionaZero(dataAtual.getHours())}:${adicionaZero(dataAtual.getMinutes())}:${adicionaZero(dataAtual.getSeconds())}`

    let Id = (dataAtualFormatada + PessoaSelecionado.Chapa + ProdutoSelecionado.Material).replace("/", 0).replace("/", 0)

    let Requisicoes = new Requisicao()
    ListaDeRequisicao.push(Requisicoes.Add(
      Id,
      ProdutoSelecionado.Material,
      ProdutoSelecionado.Prod,
      Q,
      Preco,
      Valor,
      dataAtualFormatada,
      Hora,
      PessoaSelecionado.Chapa,
      PessoaSelecionado.Nome,
      PessoaSelecionado.Gestor,
      PessoaSelecionado.Setor,
      "GersonV", //Nome do Usuario que logar para fazer a requisição
      username,
      Motivo
    ));
    console.log(ListaDeRequisicao)

    //Limpar valores da seleção deixar apenas o colaborador.
    document.getElementById('Produto').value = ''
    document.getElementById('Quantidade').value = ''
    document.getElementById('Motivo').value = ''

  }
}


function ValidarTextBox() {
  let Colaborador = document.getElementById('Colaborador')
  let Produto = document.getElementById('Produto')
  let Qtd = document.getElementById('Quantidade')
  let Motivo = document.getElementById('Motivo')

  if (Colaborador.value == null || Colaborador.value == '' || Colaborador.value == 0) {
    return "vazio"
  }
  if (Produto.value == null || Produto.value == '' || Produto.value == 0) {
    return "vazio"
  }
  if (Qtd.value == null || Qtd.value == '' || Qtd.value == 0) {
    return "vazio"
  }
  if (Motivo.value == null || Motivo.value == '' || Motivo.value == 0) {
    return "vazio"
  }
}

//=================================================================================================

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//|||||||||||||||||||||||||||||||||||||||||--TABELA--|||||||||||||||||||||||||||||||||||||||||||||

//Remover Linha da Tabela
function removerLinha(Linha) {
  document.getElementById('TabelaReq').deleteRow(Linha);
  ListaDeRequisicao.splice((Linha - 2), 1)
  console.log(ListaDeRequisicao)
}


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

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||