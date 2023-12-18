import React, { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";
/*-Const de las categorias a mostrar-*/
export const Item = ({ title, price, id,category, description,Imagen }) => {
  const [cart, setCart] = useContext(CartContext);
/*-Const que nos permitira a;adir al carrito-*/
  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };
/*-Const que nos permitira remover un producto del carrito-*/
  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
/*-Const que nos permite hacer la suma de los productos de distintos ID-*/
  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    /*-HTML de las cart que mostraran los productos-*/
    <div className="card mb-2 max-width: 500px;">
        <div class="row g-0">
          <div class="col-md-3"></div>
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      <div>{title}</div><br></br>
      <center><img src={Imagen} width="100" height="100" /></center>
      <br></br>
      <div className="item-price">${price}</div><br></br>
      <div className="item-price">{category}</div><br></br>
      <div className="item-price">{description}</div><br></br>
      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
        Añadir al carrito
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          + Añadir otro producto
        </button>
      )}
      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          Eliminar
        </button>
      )}
    </div>
    </div>
  );
};
