const burningBars = document.querySelector('.fa-bars')
const burningMark = document.querySelector('.fa-xmark')
const burningCanvas = document.querySelector('.canvas')


burningBars.addEventListener('click', open)

function open(){
    burningCanvas.classList.add('active') 
}




burningMark.addEventListener('click' , close)
function close(){
    burningCanvas.classList.remove('active')
}



const h1Element = document.getElementsByTagName('h1')[0]
 
let i=0
 const text = "Burning Man"

 const speed = 200

 function typingEffect(){

      if(i<text.length){
        h1Element.innerHTML += text.charAt(i)
    i++

        setTimeout(typingEffect ,speed)
    
      }
  
    }
 document.addEventListener('DOMContentLoaded' , typingEffect)