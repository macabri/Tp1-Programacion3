const fs = require ('fs');
const ProductosApi = 'https://fakestoreapi.com/products';

// 1. Recuperar la información de todos los productos (products).
async function recuperarProductos() {
    try {
        const response = await fetch(ProductosApi);
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        const productos = await response.json();
        console.log(productos)  

    } catch (error) {
        console.log(error);
        return [];
    }
}

// recuperarProductos();


// 2. Recuperar la información de un número limitado de productos (products).
async function recuperarAlgunosProductos() {
    try {
        const response = await fetch(ProductosApi);
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        const productos = await response.json();
        const AlgunosProductos= productos.filter (producto => producto.id < 10); 
        console.log(AlgunosProductos) 

    } catch (error) {
        console.log(error);
        return [];
    }
}

// recuperarAlgunosProductos();

// 3. Agregar un nuevo producto (product).

// 4. Retornar un producto (product) según un “id” como parámetro.
async function recuperarProductoID() {
    try {
        const response = await fetch(ProductosApi);
        if (!response.ok) {
            throw new Error(`Error al cargar: ${response.status}`);
        }
        const productos = await response.json();
        const unProducto=productos.find (productos=> productos.id === 10 );
        console.log (unProducto)
       

    } catch (error) {
        console.log(error);
        return [];
    }
}

recuperarProductoID()

// 5. Eliminar un producto (product).
