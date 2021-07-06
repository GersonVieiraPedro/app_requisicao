

function DISTINCT(value, index, self) {
    return self.indexOf(value) === index;
}

// usage example:
var array = ['2121', '2121', '21213', '21212', '2121', '21a21', '21a21', '21z21', '2121', '21z21', '2121', '214321', '214321', '212d1', '2ew121'];

var unique = array.filter(DISTINCT);


function CriarListaDeRequisicao(Arr) {

    let Acordeon = document.getElementById("ListaReq")

    let Lista = Arr
    let NumPedidos = new Array()

    let indice = 0
    //Criar Uma Lista só com os numeros de pedidos
    while (indice < Lista.length) {

        NumPedidos.push(Lista[indice].Pedido)

        indice++
    }

    //Lista com numero de pedidos sem duplicidade
    NumPedidos = NumPedidos.filter(DISTINCT)
    //console.log(NumPedidos)

    let i = 0
    let HTML = ""
    while (i < NumPedidos.length) {

        let Pedidos = Lista.filter(Item => Item.Pedido == NumPedidos[i]);

      HTML = HTML + AdordeonHTML(Pedidos, i)

      i++
    }

    Acordeon.innerHTML = HTML
}




function AdordeonHTML(Pedidos, Indice) {


    let i = 0

    let rows = ''

    while (i < Pedidos.length) {

        let row =
            `
            <tr>
              <td>${Pedidos[i].Material}</td>
              <td>${Pedidos[i].Descricao}</td>
              <td>${Pedidos[i].Qtd}</td>
              <td>${Pedidos[i].Solicitante}</td>
              <td>
                <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                </div>
              </td>
              <td>
                <input type="number" name="NumReqSAP" id="NumReqSAP${i}">
              </td>
              <td>
                <select id="Motivo${i}" required aria-placeholder="Motivo">
                  <option selected></option>
                  <option value="Ok">Ok</option>
                  <option value="Ruptura">Ruptura</option>
                  <option value="Quebra">Quebra</option>
                  <option value="Falta">Falta</option>
                  <option value="Perda">Perda</option>
                  <option value="Cencelado">Cancelado</option>
                </select>
              </td>
              <td>
                <select id="Separador${i}"  aria-label="Default select example">
                  <option selected></option>
                  <option value="DOUGLAS">DOUGLAS</option>
                  <option value="GUSTAVO">GUSTAVO</option>
                  <option value="ADRIANO">ADRIANO</option>
                  <option value="EILSON">EILSON</option>
                </select>
              </td>
            </tr>
          `

        rows = rows + row

        i++
    }


    let HTML = `               

    <div class="accordion-item">
    <h2 class="accordion-header" id="heading${Indice}">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${Indice}" aria-expanded="false" aria-controls="collapse${Indice}">
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="Label-${Pedidos[0].Pedido}">
              <label class="form-check-label" for="Label-${Pedidos[0].Pedido}">
                <h5 class="mb-1">${Pedidos[0].Pedido}</h5>
              </label>
            </div>
            <small>0 Dias</small>
          </div>
          <p class="mb-1">${Pedidos[0].Solicitante}</p>
        </a>
      </button>
    </h2>
  
    <div id="collapse${Indice}" class="accordion-collapse collapse" aria-labelledby="heading${Indice}" data-bs-parent="#ListaReq">
  
      <div class="accordion-body">
        <table class="table table-hover table-sm position-static" id='${Pedidos[0].Pedido}'>
          <thead class="table-primary">
            <tr>
              <th class="col-auto" scope="col">Material</th>
              <th class="col-auto" scope="col">Produto</th>
              <th class="col-auto" scope="col">Qtd</th>
              <th class="col-auto" scope="col">Colaborador</th>
              <th class="col-auto" scope="col">Atendido</th>
              <th class="col-auto" scope="col" style="width: 17px;">Nº SAP</th>
              <th class="col-auto" scope="col">Motivo</th>
              <th class="col-auto" scope="col">Separador</th>
            </tr>
          </thead>
          <tbody>
          ${rows}
          </tbody>
        </table>
      </div>
  
    </div>
  </div>
        `

    return HTML
}

document.getElementById("AtulizarButton").addEventListener("click",()=>{
  ChamarListaDeRequisicoes()
})


document.getElementById("SalvarButton").addEventListener("click",()=>{
  ValidarCamposDePedidosSelecionados()
})

function ValidarCamposDePedidosSelecionados() {
  let Acordeon = document.getElementById("ListaReq")

  let a = 0
  let Pedidos = Acordeon.children.length

  while (a < Pedidos) {

    let check = Acordeon.children[a].children[0].children[0].children[0].children[0].children[0].children[0].checked
    let Id = Acordeon.children[a].children[0].children[0].children[0].children[0].children[0].children[0].id

    Id = Id.substring(6, Id.length)
    if (check == true) {

      let Tabela = document.getElementById(Id)
      let Linhas = Tabela.rows.length

      let validar = new Array()
      let i = 1
      while (i < Linhas) {

        let Atendidos = Tabela.rows[i].cells[4].children[0].children[0].checked

        validar.push(Atendidos)

        i++
      }

      let TemUmAtivo = validar.indexOf(true)

      if (TemUmAtivo >= 0) {

        let valid = "OK"

        let i0 = 1
        while (i0 < Linhas) {

          let Atendidos = Tabela.rows[i0].cells[4].children[0].children[0].checked
          let NumSAP = Tabela.rows[i0].cells[5].children[0].value

          if (Atendidos == true && NumSAP == "") {
            alert(` Pedido : ${Id} \n \n Esqueceram de Colocar o Nº SAP, na celula : ${i0}`)
            valid = "ERRO"
            break
          }

          i0++
        }

        let i1 = 1
        while (i1 < Linhas) {

          let Motivo = Tabela.rows[i1].cells[6].children[0].value

          if (Motivo == "") {
            alert(` Pedido : ${Id} \n \n Esqueceram de Colocar o Motivo, na celula : ${i1}`)
            valid = "ERRO"
            break
          }

          i1++
        }

        let i2 = 1
        while (i2 < Linhas) {

          let Separador = Tabela.rows[i2].cells[7].children[0].value

          if (Separador == "") {
            alert(` Pedido : ${Id} \n \n Esqueceram de Colocar o Separador, na celula : ${i2}`)
            valid = "ERRO"
            break
          }

          i2++
        }


        if (valid == "OK") {

          CriarArrayDePedidosOK(Id)

        }


      } else {

        alert(" Pedido : " + Id + "\n \nNão Foi Encontrado Nem Um Item ATENDIDO")

      }

    }
    a++
  }

  CriarListaDePedidos()
}

let ArrayPedidosOK = new Array()

function CriarArrayDePedidosOK(ID) {

  ArrayPedidosOK.push(ID)

}

function CriarListaDePedidos() {

  let Acordeon = document.getElementById("ListaReq")
  let Username = document.querySelector(".H3User").innerHTML
  let Hora = HoraAtual()
  let Data = DataAtual()
      Data = DateUTP8Format(Data)
  let DateTime = `${Data} ${Hora}`

  let a = 0
  let Pedidos = Acordeon.children.length

  let ListaDePedidos = new Array()

  //let Pedido = 

  while (a < Pedidos) {

    let check = Acordeon.children[a].children[0].children[0].children[0].children[0].children[0].children[0].checked
    let Id = Acordeon.children[a].children[0].children[0].children[0].children[0].children[0].children[0].id

    Id = Id.substring(6, Id.length)
    ListaValidada = ArrayPedidosOK.indexOf(Id)

    if (check == true && ListaValidada >= 0  ) {

      let Tabela = document.getElementById(Id)
      let Linhas = Tabela.rows.length
      let Li = 1

      while(Li < Linhas){

        let Separador = Tabela.rows[Li].cells[7].children[0].value
        let Motivo = Tabela.rows[Li].cells[6].children[0].value
        let Atendidos = Tabela.rows[Li].cells[4].children[0].children[0].checked
        let NumSAP = Tabela.rows[Li].cells[5].children[0].value
        let Material = Tabela.rows[Li].cells[0].outerText
        let Solicitante = Tabela.rows[Li].cells[3].outerText
        Atendidos = Atendidos == true ? "ATENDIDO" : "NÃOATENDIDO"
        let ObjPedidos = new Object()

        ListaDePedidos.push(

          ObjPedido = {

            Pedidos: Id, 
            Material: Material,
            Solicitante: Solicitante,
            Atendido: Atendidos,  
            Motivo: Motivo,
            Separador: Separador,
            Username: Username, 
            NumSAP: NumSAP, 
            DateTime: DateTime

          }
          
        )

        Li++
      }

    }

    a++
  }

  EnviarListaParaOBanco(ListaDePedidos)
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

function DateUTP8Format(DataSting){
  return (`${DataSting.substring(6,10)}-${DataSting.substring(3,5)}-${DataSting.substring(0,2)}`)
}



//Adiona 0 na Frente se o numero for menor que 10 
function adicionaZero(numero) {
  if (numero <= 9)
      return "0" + numero;
  else
      return numero;
}
