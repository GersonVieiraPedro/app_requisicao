// window.onclick = function(event) {
//     let Elemento = event.target
//     if(Elemento.localName == "td"){
//         createCell(Elemento)
//     }

// }

// function createCell(name) {
//     let TD = document.createElement('td');
//     TD.innerHTML = name.textContent

//     TD.addEventListener('click', function() {
//       let TD = this;
//       let INPUT = document.createElement('input');
//       INPUT.type = 'text';
//       INPUT.value = this.innerHTML;
//       INPUT.addEventListener('blur', function() {
//         TD.innerHTML = this.value;
//       });

//       this.innerHTML = '';
//       this.appendChild(INPUT);
//     });

//     return TD;
//   }


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
    console.log(NumPedidos)

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
                  <option value="A">R</option>
                  <option value="V">D</option>
                  <option value="Q">Q</option>
                  <option value="P">P</option>
                </select>
              </td>
              <td>
                <select id="Separador${i}"  aria-label="Default select example">
                  <option selected></option>
                  <option value="1">DOUGLAS</option>
                  <option value="2">GUSTAVO</option>
                  <option value="3">ADRIANO</option>
                  <option value="4">EILSON</option>
                  <option value="4">JOICE</option>
                  <option value="4">JULIE</option>
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
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
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