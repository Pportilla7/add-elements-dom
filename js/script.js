 // Aquí tu código
let list=document.getElementById('lista');
console.log(list);

let boton=document.getElementById('agregar');
console.log(boton);

function agregarelemento(){
    let elemento=document.createElement('li');
    elemento.textContent=prompt('Introduce un elemente a la lista');
    list.appendChild(elemento);
}

boton.addEventListener('click',agregarelemento);

