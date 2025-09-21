El equipo de Alura LATAM elaboró un desafío challenge amigo con el fin de poner en práctica el aprendizaje que estuvimos adquiriendo a lo largo de los cursos de principiante en programación.

En el curso del desafio challenge amigo hay un video explicativo de Alura LATAM con las especificaciones y toda la información necesaria para elaborar el proyecto.

En la plataforma de Trello encontramos el paso a paso en formato de notas o tarjetas para que nos guiemos en la elaboración del proyecto.

Antes de comenzar, el proyecto puede descargarse desde el repositorio en GitHub y luego abrirse con Visual Studio Code desde el apartado "file" y luego "open folder" seleccionando la carpeta del proyecto.

De esta manera teniendo en cuenta los puntos anteriores, armo punto por punto los pasos que hice para desarrollar el código del proyecto, agregando algunas pequeñas funcionalidades extras:

1- Declaré una variable llamada "nombresAmigos" Y le asigne una estructura de arreglo.

2- Declaro una función con nombre "agregarAmigo" Y hago uso del selector con ID para seleccionar el input "amigos" del HTML. Luego le agrego un punto y le asignó value para que capture el valor.

3- Agrego una condición cuando el usuario selecciona el botón "añadir" sin agregar un nombre en el input. Es decir, utilizo la condición if mostrando una alerta cuando el elemento del input = 0.

4- De lo contrario, si el usuario escribe un nombre se agregará a la lista creada con la opción .push

5- Luego una vez se agrega el nombre con el boton "añadir", se limpiará la caja del input con valor vacío, es decir, value = "",

6- Declaro una nueva función con nombre "mostrarAmigos", hago uso del selector con ID en una variable para seleccionar la "listaAmigos" y le asigno innerHTML = ""; para limpiar la lista existente.

7- Utilizo el bucle for para denominar el recorrido del arreglo en los parámetros, para que incluya cada posicionamiento de la lista desde la posición 0 hasta la ultima de acuerdo con la cantidad de elementos "nombres" que agregue el usuario.

8- Elaboré un nuevo elemento con nomenclatura

para que cada elemento del arreglo tenga su posicionamiento visible en la página.
9- Declaro una nueva función con nombre "sortearAmigo", y utilicé una condición if cuando el usuario no agrega elementos en la lista y presiona el boton "Sortear amigo", es decir, nombreLista.length === 0. Si esto sucede, aparecerá una alerta indicandole al usuario que agregue nombres de amigos antes de comenzar el sorteo.

10- Agrego una variable llamada "elegirAleatoriamente" para que el sistema elija aleatoriamente un nombre del listado. Para esto utilizo los comandos math.floor y math.random * lista creada para que funcione.

11- Por último, agrego una variable llamada "resultadoAmigoSorteado" y haciendo uso del selector con ID, selecciono el elemento "resultado" para agregar el texto del nombre que salió sorteado, con un mensaje determinado.

Con todos estos pasos realizados pude crear el proyecto Challenge Amigo Secreto con las condiciones que fueron solicitadas para obtener óptimos resultados y con posibles mejoras a futuro.
