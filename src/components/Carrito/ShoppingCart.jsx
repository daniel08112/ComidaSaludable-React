import React, { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";
import {Link} from "react-router-dom";


export const ShoppingCart = () => {
  /*-Const que usaremos en html de las carts-*/
  const [cart, setCart] = useContext(CartContext);
/*-Const para obtener la cantidad de productos-*/
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
/*-Const para obtener el resultado del precio de os productos-*/
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  
  return (
/*-Contenedor del carrito para mostrar la cantidad de productos y precio-*/
    <div className="cart-container">
      <div className="card bg-white p-3 rounded w-40">
      <Link to= "/" type="button" className="btn-close flex-column" aria-label="Close"></Link>
        <div><strong> Cantidad de Platillos: {quantity}</strong></div>
        <div>Total: ${totalPrice}</div>
        <Link to="/Pago" className="btn btn-success" onClick={() => console.log(cart)}>Pagar</Link>
      </div>
    </div>
  );
};
