let Time = setInterval(Galery,5000)


function Galery() {
    
let Banner = window.document.getElementById('Imagebanner')
let GaleriaFotos = [
    '00001.jpg','172211.webp',
    'banner_mobile_atualizado_bifetiras_CTA.jpg',
    'banner-mobile-black-granreserva-cta.webp',
    'Banner_Mobile_Porco_Iberico_Com_atualizado.webp'
]

let Foto = Banner.attributes[1].value
Foto = Foto.substring(18)
let Tamanho =  GaleriaFotos.length -1
let Indice = GaleriaFotos.indexOf(Foto)

if(Indice == Tamanho){
    Indice = 0
}else{
    Indice = Indice + 1
}
//console.log(Banner) 
//Banner.setAttribute('src', `../image/${GaleriaFotos[Indice]}`)
Banner.style.animation = ""
setTimeout(()=> Banner.style.animation ="entrarimg 0.8s , FadeOut 1.5s reverse")
Banner.setAttribute('src',  `/Img/Login/Banner/${GaleriaFotos[Indice]}`)

//Banner.style.animation = ""
//setTimeout(()=> Banner.style.animation ="sairimg 1s, FadeOut 1s")

}
