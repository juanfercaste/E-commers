//GEt
const listaProductos = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

//POST
const agregarProduto = async (name, imageUrl, price, descripcion) => {
  const respuesta = await fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      descripcion,
    }),
  });
  if (respuesta.ok) {
    return respuesta.body;
  }
  throw new Error("No es posible crear un producto nuevo");
};

export const productoServices = {
  listaProductos,
  agregarProduto,
};
