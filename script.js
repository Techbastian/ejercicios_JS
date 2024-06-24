const edad = document.getElementById("tiempo");
const container = document.getElementById('respuestas');

//Ejercicio Edad
function escribirEdad() {
    container.innerHTML = "Conteo de años: ";
    for (cont = 1; cont <= edad.value; cont++) {
        let parrafo = document.createElement('p');
        container.appendChild(parrafo);
        parrafo.innerHTML = `Usted cumplió ${cont}`;
    }
}

//Cuenta regresiva
const numero = document.getElementById("num");

function cuentaAtras() {
    container.innerHTML = "Cuenta regresiva:";
    for (let cont = numero.value; cont >= 0; cont--) {
        let parrafo = document.createElement('p');
        container.appendChild(parrafo);
        parrafo.innerHTML = cont;
    }
}

//tablas de multiplicar
function tablas() {
    for (let tab = 1; tab <= 9; tab++) {
        let titulo = document.createElement('h3');
        container.appendChild(titulo);
        titulo.innerHTML = `Estas en la tabla del ${tab}`;
        for (let cont = 1; cont <= 10; cont++) {
            let parrafo = document.createElement('p');
            container.appendChild(parrafo);
            parrafo.innerHTML = `${tab} X ${cont} = ${tab * cont}`;
        }
    }
}

function imprimedatos() {
    let arreglo = "";
    let dato = "";
    do {
        dato = prompt('Ingrese un dato: ');
        arreglo += (dato + ", ");
    } while (dato !== "salir")

    let parrafo = document.createElement('p');
    container.appendChild(parrafo)
    parrafo.innerHTML=arreglo;
}

const borrar = () =>{
    container.innerHTML = "";
}