// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaro una variable llamada nombresAmigos y asigno un arreglo vacío para que el usuario pueda comenzar agregando nombres.

let nombresAmigos = [];

// Declaro una función llamada agregarAmigo y le agrego los siguientes códigos para que el usuario pueda interactuar con el input y el botón "añadir".
// Con esta función junto con la función "mostrarAmigos", se visualizará la lista de nombres de amigos que el usuario vaya añadiendo.

function agregarAmigo() {
    let añadirAmigo = document.getElementById("amigo").value.trim();

    if (añadirAmigo.length === 0) {
        alert ("Por favor, inserte un nombre");
    }
    else if (nombresAmigos.includes(añadirAmigo)) {
        alert("Ese nombre ya fue agregado");
    }
    else {
        nombresAmigos.push(añadirAmigo);
        mostrarAmigos();
    }

    document.getElementById("amigo").value = "";
    return;
}

// Declaro otra función llamada mostrarAmigos y le agrego los siguientes comandos para actualizar la lista de nombres.
// Luego ejecuto esta función en la función "agregarAmigo" para visualizar la lista de nombres.

function mostrarAmigos() {  
    let mostrarLista = document.getElementById("listaAmigos");
    mostrarLista.innerHTML = "";

    for (let recorrerArreglo = 0; recorrerArreglo < nombresAmigos.length; recorrerArreglo++) {
        let crearElemento = document.createElement("li");
        crearElemento.textContent = nombresAmigos[recorrerArreglo];
        mostrarLista.appendChild(crearElemento);
    }
    return;
}

// Declaro la función sortearAmigo y con el siguiente código, el usuario al hacer clic en el botón "sortear amigo" se ejecutará la función.
// Esta función permite que el sistema elija aleatoriamente entre la lista de amigos que el usuario añadió y le mostrará el resultado correspondiente.

function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("Agregue un nombre antes de sortear");
        return;
    }

    let elegirAleatoriamente = Math.floor(Math.random() * nombresAmigos.length);
    let amigoSorteado = nombresAmigos[elegirAleatoriamente];

    let resultadoAmigoSorteado = document.getElementById("resultado");
    resultadoAmigoSorteado.innerHTML = `<li>El amigo sorteado es <strong>${amigoSorteado}</strong></li>`;
}