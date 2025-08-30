// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo donde se guardarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al arreglo
function agregarAmigo(){
    // Obtener el nombre del amigo desde el input (con id "amigo")
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value;

    // Validar que el nombre no esté vacío
    if (nombreAmigo.trim() === ""){
        alert("Por favor, ingresa un nombre válido.");
        return; // Detenemos la ejecución si el campo está vacío
    }

    // Actualizar el arreglo de amigos
    amigos.push(nombreAmigo);

    // Mandamos un mensaje al console para ver los amigos agregados
    console.log("Amigos agregados:", amigos);

    // Limpiar el campo de entrada después de agregar el amigo
    inputAmigo.value = "";

    // Mostrar la lista actualizada de amigos en el HTML
    mostrarAmigos();

}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos(){
    // Obtenemos el elemnto de la lista (con id "listaAmigos")
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiamos la lista antes de mostrar los amigos
    listaAmigos.innerHTML = "";

    // Iteramos sobre el arreglo de amigos y agregamos cada uno a la lista
     for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];

        // Agregamos elementos a la lista
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

// Creamos una función para sortear un amigo al azar
function sortearAmigo(){
    // Validamos que haya al menos un amigo en la lista
    if (amigos.length === 0){
        alert("Por favor, agrega al menos un amigo para sortear.");
        return; // Detenemos la ejecución si no hay amigos
    }

    // Generamos un índice aleatorio basado en la longitud del arreglo de amigos
    // Math.random() genera un número entre 0 y 1
    // Multiplicamos por la longitud del arreglo para obtener un rango adecuado
    // Math.floor() redondea hacia abajo para obtener un índice entero
    const indiceAleatorio = Math.floor(Math.random() * amigos.length)

    // Obtenemos el nombre del amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado del sorteo
    const resultadoHTML = document.getElementById("resultado" );
    resultadoHTML.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}
