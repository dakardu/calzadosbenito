const figure = document.querySelectorAll('.container__figure')
let imagenes = ['img/shooper.jpg', 'img/shooper1.jpg', 'img/shooper2.jpg']

let contador = 0;


// console.log(imagenes)

function cambiarImagen(e){
    if(contador < imagenes.length -1){
        e.target.style.backgroundImage = `url(${imagenes[contador + 1]})`
        contador++
    }else{
        e.target.style.backgroundImage = ` url(${imagenes[0]})`
        contador = 0
    }
    
}

figure.forEach(item => item.addEventListener("mouseover", e => cambiarImagen(e)))