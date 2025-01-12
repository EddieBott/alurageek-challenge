const formAgregar = document.getElementById('form-agregar');
const productosLista = document.querySelector('.productos-lista');

function crearProducto(nombre, precio, imagen) {
    const producto = document.createElement('div');
    producto.classList.add('producto');

    const img = document.createElement('img');
    img.src = imagen;
    img.alt = nombre;
    producto.appendChild(img);

    const nombreElemento = document.createElement('h3');
    nombreElemento.textContent = nombre;
    producto.appendChild(nombreElemento);

    const precioElemento = document.createElement('p');
    precioElemento.textContent = `$ ${precio.toFixed(2)}`;
    producto.appendChild(precioElemento);

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '';
    btnEliminar.addEventListener('click', () => {
        producto.remove();
    });
    producto.appendChild(btnEliminar);

    productosLista.appendChild(producto);
}

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

formAgregar.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = formAgregar.nombre.value;
    const precio = parseFloat(formAgregar.precio.value);
    const imagen = formAgregar.imagen.value;

    crearProducto(nombre, precio, imagen);

    formAgregar.reset();
});

document.addEventListener('DOMContentLoaded', agregarProductosPredeterminados);
