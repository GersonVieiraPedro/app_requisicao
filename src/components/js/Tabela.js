function Requisicao() {

  this.Add = (Material = Number, Descricao = String, Quantidade = Number, PrecoUn = Number, Valor = Number, Data = Date,
    Hora = Date, Chapa = Number, Nome = Text, Vistoria = Text, Maquina = Text, Username = Text) => {

    let Req = new Object()
    Req = {
      ID: Material + (Data * 24) + Chapa,
      Material: Material,
      Desc: Descricao,
      Quantidade: Quantidade,
      PrecoUn: PrecoUn,
      Valor: Valor,
      Data: Data,
      Hora: Hora,
      Chapa: Chapa,
      Nome: Nome,
      Vistoria: Vistoria,
      Maquina: Maquina,
      Username: Username
    }
    return (Req)
  }
}


let ListaDeRequisicao = new Array()

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


  //Pega o Array de Objetos do elemento Escondido no HTML
  let ArrayProdutos = document.getElementById('ListaDeProdutos').Value
  let ArrayPessoas = document.getElementById('ListaDeNomes').Value

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
  let p = ProdutoSelecionado.PrecoUnitatio //Extrai o preço unitario do objeto
  let Preco = p.replace(",", ".") //Substitui a , para o . do preço
  Preco = Number.parseFloat(Preco).toFixed(2) //Transforma a String Preco em Numero e seta em duas casas decimais
  let Valor = (Q * Preco).toFixed(2) //Realiza a multiplicação

  CellMaterial.innerHTML = ProdutoSelecionado.Material
  CellProduto.innerHTML = Produto.toUpperCase()
  CellQtd.innerHTML = Qtd
  CellPreco.innerHTML = ProdutoSelecionado.PrecoUnitatio
  CellValor.innerHTML = `R$:${Valor}`
  CellCalaborador.innerHTML = Calocaborador.toUpperCase()
  //CellLedtime.innerHTML =
  CellMotivo.innerHTML = Motivo
  CellButton.innerHTML = `<button  onclick="removerLinha()"  id="btnRemove" class=" btn-id btn btn-danger btn-sm" type="button">X</button>`


  function adicionaZero(numero) {
    if (numero <= 9)
      return "0" + numero;
    else
      return numero;
  }

  let dataAtual = new Date(); //29/01/2020
  let dataAtualFormatada = (adicionaZero(dataAtual.getDate().toString()) + "/" + (adicionaZero(dataAtual.getMonth() + 1).toString()) + "/" + dataAtual.getFullYear());
  let Hora = `${dataAtual.getHours}:${dataAtual.getMinutes}:${dataAtual.getSeconds}`


  let Requisicoes = new Requisicao()
  ListaDeRequisicao.push(Requisicoes.Add(
    ProdutoSelecionado.Material,
    ProdutoSelecionado.Prod,
    Q,
    Preco,
    Valor,
    dataAtualFormatada,
    Hora,
    PessoaSelecionado.Chapa,
    PessoaSelecionado.Nome
  ));

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

  /*
  return Arr.filter((valor) => {
    const valorMinusculo = valor.toLowerCase()
    const listaMinusculo = lista.toLowerCase()
    return valorMinusculo.includes(listaMinusculo)
  })
  */
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

  /*
  return Arr.filter((valor) => {
    const valorMinusculo = valor.toLowerCase()
    const listaMinusculo = lista.toLowerCase()
    return valorMinusculo.includes(listaMinusculo)
  })
  */
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