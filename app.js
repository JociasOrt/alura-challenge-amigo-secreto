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

}
