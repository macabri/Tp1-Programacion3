const fs = require ('fs');
const GotApi = 'https://thronesapi.com/api/v2/Characters';

// 1. Realizar una función que permita recuperar la información del personaje “Ned Stark”.
async function recuperarStark() {
    try {
        const response = await fetch(GotApi);
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        const personajes = await response.json();
        let nedStark = personajes.find(personajes => personajes.fullName === 'Ned Stark')
        console.log(nedStark);

        
    } catch (error) {
        console.log(error);
        return [];
    }
}

// recuperarStark();


// 2. Realizar una función que permita recuperar todos los personajes disponibles.
async function obtenerTodosLosPersonajes() {
    try {
        const response = await fetch(GotApi);
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        const personajes = await response.json();
        console.log(personajes);
        return personajes;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// obtenerTodosLosPersonajes();

// 3. Persistir el resultado de la segunda consulta localmente en un archivo JSON.
async function guardarPersonajes() {
    try {
        const response = await fetch(GotApi);
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        const personajes = await response.json();
        // console.log(personajes);
        fs.writeFileSync('Personajes.json',JSON.stringify(personajes));
        return personajes;
    } catch (error) {
        console.log(error);
        return [];
    }
}
guardarPersonajes();

// 4. Leer el archivo local de personajes
const dato = fs.readFileSync('Personajes.json', 'utf-8');

// a) Mostrar por consola los personajes de la familia Stark. Es decir: “family” = “House Stark”.
const personajes = JSON.parse(dato);
let stark = personajes.filter(personaje => personaje.family === 'House Stark');
// console.log(stark);

// b) Agregar un nuevo personaje y sobrescribir el archivo original.
const personajeNuevo ={
    id:999,
    firstName:"Chiquito",
    lastName: "Stark",
    fullName:"Chiquito Stark",
    title: "Heredero de mi pequeño, la princesa y la Lopez, amigo de Nachito, Simon y Coco",
    family:"House Stark",
    image: "chiquito.jpg",
    imageUrl:"https://blog.mascotaysalud.com/wp-content/uploads/2021/11/gato-azul-ruso.jpg",

}

personajes.push(personajeNuevo);
fs.writeFileSync('Personajes.json',JSON.stringify(personajes));
console.log(dato)

// c) Eliminar los personajes cuyo ID sean mayores a 25 y sobrescribir el archivo original.
let filtrado = personajes.filter(personaje => personaje.id >= 25);
fs.writeFileSync('Personajes.json', JSON.stringify(filtrado, null, 2), 'utf-8');


