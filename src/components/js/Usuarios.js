

function CriarTabelaDeUsuarios(Lista) {

    let ListaDeUser = Lista
    let Tamanho = ListaDeUser.length
  
    let Linhas = ''
  
    let i = 0
    while(i < Tamanho){
      
      let ListaDePessoas = document.getElementById("ListaDeNomes").Value
      let Chapa = ListaDeUser[i].Chapa
  
      let User = ListaDePessoas.filter(pessoa => pessoa.Chapa == Chapa);
      let Acesso = ListaDeUser[i].Situacao == null ? "FALSE" : ListaDeUser[i].Situacao
      let AcessoHTML = ""
      if (Acesso != "FALSE"){
        AcessoHTML = `checked = "TRUE"`
       }
  
      HTML = `
      <tr>
        <td style=" text-align: start" >${Chapa}</td>
        <td style=" text-align: start" >${User[0].Nome}</td>
        <td style=" text-align: start" >${User[0].Setor}</td>
        <td style=" text-align: start" >${ListaDeUser[i].Username}</td>
        <td style=" text-align: start" >
          <select id="Grupo${i}">
            <option selected>${ListaDeUser[i].Grupo}</option>
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
            <option value="RH">RH</option>
            <option value="SEPARADOR">SEPARADOR</option>
          </select>
        </td>
        <td style=" text-align: start" >${User[0].Gestor}</td>
        <td>
          <div class="form-check form-switch" id="Acesso${i}">
          <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" ${AcessoHTML} >
          </div>
        </td>
      </tr>
      `
      Linhas = Linhas + HTML
  
      i++
  
    }
  
  
  
    let Tabela = document.getElementById("TabelaUsuarios")
  
      Tabela.innerHTML = `                  
      <thead class="table-primary">
      <tr>
        <th class="col-auto" scope="col">Chapa</th>
        <th class="col-auto" scope="col">Nome</th>
        <th class="col-auto" scope="col">Setor</th>
        <th class="col-auto" scope="col">Username</th>
        <th class="col-auto" scope="col">Grupo</th>
        <th class="col-auto" scope="col">Gestor</th>
        <th class="col-auto" scope="col" style="width: 17px;">Acesso</th>
      </tr>
    </thead>
    <tbody>
      ${Linhas}
    </tbody>
    ` 


}



function CriarArrayDaTabelaUsuario(){

    let Tabela = document.getElementById("TabelaUsuarios")

    let Linhas = Tabela.rows.length

    let i = 1
    let Lista = new Array()
    

    while( i < Linhas){

        let User = new Object()
        let Chapa = Tabela.rows[i].cells[0].innerText
        let Grupo = Tabela.rows[i].cells[4].children[0].value
        let Acessos = Tabela.rows[i].cells[6].children[0].children[0].checked
            Acessos = `${Acessos}`
            Acessos = Acessos.toUpperCase()

        Lista.push(
            User = {
                Chapa: Chapa,
                Grupo: Grupo,
                Acesso: Acessos
            }

        )

     i++
    }


 EnviarParaOBanco(Lista)

}

document.getElementById("SalvarButtonUsuarios").addEventListener("click", ()=>{

    CriarArrayDaTabelaUsuario()
    alert("Alterações Salva Com Sucesso")

})



document.getElementById("AtulizarButtonUsuarios").addEventListener("click", ()=>{

    ListaDeUsuarios() 
    alert("Lista Atualizada")

})




 