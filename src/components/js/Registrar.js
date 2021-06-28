/*
const {TouchBar} = require("electron")
const {ipcRenderer} = require('electron')
const path = require("path")


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

*/