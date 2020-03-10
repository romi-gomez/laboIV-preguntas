evaluarOraciones(preguntas)
console.log(palabrasEncontradas.length)

let contenedor = document.querySelector('#preguntitas')

for(i = 0 ; i<palabrasEncontradas.length ; i++){
      let contenido=document.createElement('p')
      contenido.innerHTML= palabrasEncontradas[i].palabra
      contenedor.appendChild(contenido)
      
      contenido.style.display = "inline-block"
      contenido.style.margin = "10px"
      contenido.style.fontSize = 1*palabrasEncontradas[i].apariciones + "em"
}  



