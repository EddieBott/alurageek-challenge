// Seleccionamos el formulario y la lista de productos
const formAgregar = document.getElementById('form-agregar');
const productosLista = document.querySelector('.productos-lista');

// Función para crear un elemento de producto
function crearProducto(nombre, precio, imagen) {
    // Crear un contenedor para el producto
    const producto = document.createElement('div');
    producto.classList.add('producto');

    // Crear y agregar la imagen
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = nombre;
    producto.appendChild(img);

    // Crear y agregar el nombre
    const nombreElemento = document.createElement('h3');
    nombreElemento.textContent = nombre;
    producto.appendChild(nombreElemento);

    // Crear y agregar el precio
    const precioElemento = document.createElement('p');
    precioElemento.textContent = `$ ${precio.toFixed(2)}`;
    producto.appendChild(precioElemento);

    // Crear y agregar el botón de eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '';
    btnEliminar.addEventListener('click', () => {
        producto.remove();
    });
    producto.appendChild(btnEliminar);

    // Agregar el producto a la lista
    productosLista.appendChild(producto);
}

// Función para agregar productos predeterminados
function agregarProductosPredeterminados() {
    const productosPredeterminados = [
        { nombre: "El señor de los anillos, juego de cartas", precio: 60, imagen: "./Assets/images/anillo.jpg" },
        { nombre: "Dragonbane, libro de reglas", precio: 20, imagen: "./Assets/images/dragon.jpg" },
        { nombre: "Dungeon and dragons, set de inicido", precio: 80, imagen: "./Assets/images/dungeon.jpg" },
        { nombre: "Heroes of barcadia", precio: 55, imagen: "./Assets/images/heroes.jpg" },
        { nombre: "Pathfinder, set de iniciado", precio: 30, imagen: "./Assets/images/path.jpg" }
    ];

    productosPredeterminados.forEach(producto => {
        crearProducto(producto.nombre, producto.precio, producto.imagen);
    });
}

// Escuchar el evento de envío del formulario
formAgregar.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = formAgregar.nombre.value;
    const precio = parseFloat(formAgregar.precio.value);
    const imagen = formAgregar.imagen.value;

    // Crear y agregar el producto
    crearProducto(nombre, precio, imagen);

    // Limpiar los campos del formulario
    formAgregar.reset();
});

// Agregar productos predeterminados al cargar la página
document.addEventListener('DOMContentLoaded', agregarProductosPredeterminados);