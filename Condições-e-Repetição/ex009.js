var texto = addEventListener.querySelector('body')


function returnHora(){
    var boxContent = document.querySelector('div#box')
    var hora = new Date().getHours
    boxContent.innerHTML = `Agora são ${hora} horas.`
}