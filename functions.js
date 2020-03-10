let palabrasEncontradas = []

const separarOracion = (oracion) =>{
  let palabras = oracion.split(" ")
    for(let i = 0; i<palabras.length ; i++){
      if(palabras[i]=== "?"){
        palabras.splice(i, 1)
      }
    }
  return palabras
}

const evaluarOracion = (pregunta) => {
  let palabraEncontrada = false
  separarOracion(pregunta).map((palabraEvaluada)=>{
    for(let i = 0 ; i < palabrasEncontradas.length; i++){
      if(palabrasEncontradas[i].palabra === palabraEvaluada){
        palabraEncontrada = true
        palabrasEncontradas[i].apariciones = palabrasEncontradas[i].apariciones+1
      }
    }
    if(!palabraEncontrada){
      palabrasEncontradas.push({'palabra': palabraEvaluada, 'apariciones' : 1 })
    }
  })  
}

const evaluarOraciones = (listaDePreguntas) => {
  listaDePreguntas.map((pregunta)=>{
    evaluarOracion(pregunta)
  })
}
