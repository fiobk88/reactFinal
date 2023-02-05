//Funciones para calcular

//recibe el array de carrito de compras y retorna el precio total acumulando la suma de el precio x la cantidad de cada producto.
const getTotalPrice = (array) => {
  return array.reduce(
    (acum, currentValue) => acum + currentValue.price * currentValue.qty,
    0
  );
};

//recibe el array de carrito de compras y retorna el número total de productos.
const getTotalItems = (array) => {
  return array.reduce((acum, currentValue) => acum + currentValue.qty, 0);
};

export { getTotalPrice, getTotalItems };