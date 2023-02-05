import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl, descripcion) => {
  const card = document.createElement("div");
  const contenido = `
  <div>
    <img src="${imageUrl}" alt="">
    <h3>${name}</h3>
    <p>${price}</p>
    <p>${descripcion}</p>
  </div>
  `;
  card.innerHTML = contenido;
  card.classList.add("card");
  return card;
};

const producto = document.querySelector("[datos-productos]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      producto.appendChild(
        nuevoProducto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.descripcion
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};
render();
