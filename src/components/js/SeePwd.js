function VerPwd(){
    let BoxPwd = document.getElementById('Pwd')
    let OnVison = document.getElementById('OnOlho')
    let OffVison = document.getElementById('OffOlho')
   let Type = BoxPwd.type
    if(Type == "password"){
        BoxPwd.setAttribute('type','text')
        OnVison.style.visibility = 'hidden'
        OffVison.style.visibility = 'visible'
    }else{
        BoxPwd.setAttribute('type', 'password')
        OnVison.style.visibility = 'visible'
        OffVison.style.visibility = 'hidden'
    }
}   