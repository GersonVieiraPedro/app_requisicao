//Remover Linha da Tabela
function removerLinha(Linha) {
    document.getElementById('TabelaReq').deleteRow(Linha);
    ListaDeRequisicao.splice((Linha - 2), 1) //splice(Indice do elemento, quantidade removidas)
    //console.log(ListaDeRequisicao)
}

//pega o elemento clicado na tela por nome de classe
function temClasse(elem, className) {

    if (elem.tagName == "BUTTON") {
        return elem.className.split(' ').indexOf(className) > -1;
    } else {
        return elem.farthestViewportElement.attributes[4].nodeValue.split(' ').indexOf(className) > -1;
    }

}

//pega o nome do usuario 
function Username(){
    let dominio = document.getElementById('ListaDeNomes').baseURI
    let T = dominio.indexOf("/", 17)
    let username = dominio.substring(17, T)
    return username
}

/*
function MaxOuMin(){
 let card = document.getElementById("card")
 let bCard = document.getElementById("bcard")
 let titulo = document.getElementById("titulo")
 let logo = document.getElementById("logo")
 let Expandi = document.getElementById("ButtonExpandi")
 let Recolher = document.getElementById("ButtoRecolher")
 

    if(card.className == "cardHidden" ){

        card.style.animation = ""
        setTimeout(() => card.style.animation = "MinimizaPainel 1s reverse")
        card.style.height = "278.16px" 
        card.className = "card-body border position-static rounded"
        bCard.style.visibility = "visible"
        titulo.className = "tMin"
        logo.style.height = "22px"
        Expandi.style.visibility = "hidden"
        Recolher.style.visibility = "visible"

    }else{

        card.style.animation = ""
        setTimeout(() => card.style.animation = "MinimizaPainel 1s")
        card.style.height = "20px" 
        card.className = "cardHidden"
        bCard.style.visibility = "hidden"
        titulo.className = "t"
        logo.style.height = ""
        Expandi.style.visibility = "visible"
        Recolher.style.visibility = "hidden"

    }

}
*/

//Adiona um linha na tabela e no o Objeto Requisição
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


        // inserindo valor nas celular criadas.
        CellMaterial.innerHTML = ProdutoSelecionado.Material
        CellProduto.innerHTML = Produto.toUpperCase()
        CellQtd.innerHTML = Qtd
        CellPreco.innerHTML = `R$: ${Preco}`
        CellValor.innerHTML = `R$: ${Valor}`
        CellCalaborador.innerHTML = Calocaborador.toUpperCase()
        CellLedtime.innerHTML = 12 //led precisa vim da tabela req
        CellMotivo.innerHTML = Motivo.substring(0, 1)
        CellButton.innerHTML = `<button onclick="" id="btnRemove" class="btn btn-id  bi icon-sm btn-icons-table btn-rounded btn-danger btn-sm" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg></button>`


        AdicionarValorTotal(Valor)

        //Pegando o valor de Data e Hora do registro 
        let DataA = DataAtual()
        let Hora = HoraAtual()

        // Criando o ID para o led Time
        let Id = DataA + PessoaSelecionado.Chapa + ProdutoSelecionado.Material

        //Criando o Objeto requisição para salvar as informações da requsição
        let Requisicoes = new Requisicao()
        ListaDeRequisicao.push(Requisicoes.Add(
            "",
            Id,
            ProdutoSelecionado.Material,
            ProdutoSelecionado.Prod,
            Q,
            Preco,
            Valor,
            DataA,
            Hora,
            PessoaSelecionado.Chapa,
            PessoaSelecionado.Nome,
            PessoaSelecionado.Gestor,
            PessoaSelecionado.Setor,
            "GersonV", //Nome do Usuario que logar para fazer a requisição
            Username(),
            Motivo
        ));
        //console.log(ListaDeRequisicao)

        //Limpar valores da seleção deixar apenas o colaborador.
        document.getElementById('Produto').value = ''
        document.getElementById('Quantidade').value = ''
        document.getElementById('Motivo').value = ''

    }
}

//Valida se os INPUT tem valores para funcionar
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

//Remove todas as linhas da tabela 
function RemoveTudo(tudo) {
    let Tamanho = ListaDeRequisicao.length + 1
    for (Tamanho; Tamanho >= 2; Tamanho--) {
        removerLinha(Tamanho)
    }
    if(tudo = true){
        document.getElementById("Colaborador").innerHTML = ""
        document.getElementById("TotalValor").innerHTML = ""
    }
}

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

// Tras o horaio atual formatado "00:00:00"
function HoraAtual() {
    let DataA = new Date();
    return `${adicionaZero(DataA.getHours())}:${adicionaZero(DataA.getMinutes())}:${adicionaZero(DataA.getSeconds())}`
}

// Tras a data atual formadata "00/00/0000"
function DataAtual() {
    let DataA = new Date();
    return `${adicionaZero(DataA.getDate().toString())}/${adicionaZero(DataA.getMonth() + 1).toString()}/${DataA.getFullYear()}`
}

//Adiona 0 na Frente se o numero for menor que 10 
function adicionaZero(numero) {
    if (numero <= 9)
        return "0" + numero;
    else
        return numero;
}

//Adiciona um ID de pedido em todos os OBJ requisição
function AdicionarNumeroPedido(){
    let i = 0
    let hora = HoraAtual().substring(0,5)
    while(i < ListaDeRequisicao.length){
      let Code = ""
      Code = ListaDeRequisicao[i].Data
      Code = Code + ListaDeRequisicao[i].Chapa
      Code = Code + hora
      ListaDeRequisicao[i].Pedido = Code
      i = i + 1
    }
    if(ListaDeRequisicao[0].Pedido != null){
        return "Numero de Pedido Realizado Com Sucesso"
    }else{
        return "Numero de Pedido Não Foi Realizado"
    }
}

// Adiciona o Valor de total
function AdicionarValorTotal(valor){
    let TotalValor = document.getElementById('TotalValor')
    //subindo o valor de total na Base
    let ValorAtual = TotalValor.innerText
    if (ValorAtual == "") {
        TotalValor.innerHTML = `R$: ${valor}`
    } else {
        ValorAtual = ValorAtual.substring(4, ValorAtual.length)
        ValorAtual = Number.parseFloat(ValorAtual)
        ValorAtual = ValorAtual + Number.parseFloat(valor)
        ValorAtual.toFixed(3)
        TotalValor.innerHTML = `R$: ${ValorAtual}`
    }
}

// Remove o Valor quando remover item da lista
function RemoverValorTotal(valor) {
    let TotalValor = document.getElementById('TotalValor')
    //subtraindo o valor de total na Base
    let ValorAtual = TotalValor.innerText

    ValorAtual = ValorAtual.substring(4, ValorAtual.length)
    ValorAtual = Number.parseFloat(ValorAtual)
    ValorAtual = ValorAtual - Number.parseFloat(valor)
    ValorAtual.toFixed(3)
    if(ValorAtual == 0 || ValorAtual == "0"){
        TotalValor.innerHTML = ""    
    }else{
        TotalValor.innerHTML = `R$: ${ValorAtual}`
    }
    
}


