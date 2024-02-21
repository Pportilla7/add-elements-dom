 // Aquí tu código
let list=document.getElementById('lista');
console.log(list);

let boton=document.getElementById('agregar');
console.log(boton);

function agregarelemento(){
    let elemento=document.createElement('li');
    do{
        elemento.textContent=prompt('Introduce un elemento a la lista');
    }while(elemento.textContent=='');
    list.appendChild(elemento);
    console.log(elemento);
}

boton.addEventListener('click',agregarelemento);

