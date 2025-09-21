// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Nota 1: Crear un array para almacenar los nombres

let nombresAmigos = [];

// Nota 2: Implementa una función para agregar amigos

function agregarAmigo() {
    let añadirAmigo = document.getElementById("amigo").value.trim();

    if (añadirAmigo.length === 0) {
        alert ("Agregue un nombre por favor");
    }
    else if (nombresAmigos.includes(añadirAmigo)) {
        alert("Ese nombre ya fue agregado");
    }
    else if (añadirAmigo.length < 3) {
        alert("Ingrese un nombre válido con al menos 3 caracteres")
    }
    else {
        nombresAmigos.push(añadirAmigo);
        mostrarAmigos();
    }

    document.getElementById("amigo").value = "";
    return;
}

// Nota 3: Implementa una función para actualizar la lista de amigos

function mostrarAmigos() {  
    let actualizarLista = document.getElementById("listaAmigos");
    actualizarLista.innerHTML = "";

    for (let arreglo = 0; arreglo < nombresAmigos.length; arreglo++) {
        let añadirElemento = document.createElement("li");
        añadirElemento.textContent = nombresAmigos[arreglo];
        actualizarLista.appendChild(añadirElemento);
    }
    return;
}

// Nota 4: Implementa una función para sortear los amigos

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("Agregue un nombre antes de realizar el sorteo");
        return;
    }

    let elegirAleatoriamente = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSorteado = nombresAmigos[elegirAleatoriamente];

    let resultadoAmigoSorteado = document.getElementById("resultado");
    resultadoAmigoSorteado.innerHTML = `<li>El amigo sorteado es <strong>${amigoSorteado}</strong></li>`;
}