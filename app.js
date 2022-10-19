/*ciclo for*/
/*
for (let index = 0; index <= 10; index++) {
    console.log(index);    
}
*/




/* funciones*/
/*
let nombre = "nikias"
function hola() {
    console.log("hola" + " " + nombre);
}
hola ()
*/

/*agregarNumero(numero){
    if (numero == '.' && this.valorActual.includes('.')) {
        return
    }
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
}*/

window.addEventListener('load', ()=>{
    const display = document.getElementById("calculator-display");
    const numeros = document.querySelectorAll(".numeros-bottones");

    const numeroArray = Array.from(numeros);

    numeroArray.forEach((button)=>{
        button.addEventListener('click', ()=>{
            calculadora(button, display)
        })
    })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button)
            break;
    }
}
function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button) {
    if (display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}