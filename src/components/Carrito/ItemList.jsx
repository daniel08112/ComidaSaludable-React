import React from "react";
import { Item } from "./Item";
import { useState, useEffect } from 'react';
import axios from 'axios';

/*-Const de ITEMLIST-*/
export const ItemList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const obtenerData = async () => {
          try {
            /*-Const que nos permitira mostrar los productos que se encuentran en nuestra base de datos-*/
              const respuesta = await axios.get('http://localhost:3001/mostrar');
              setData(respuesta.data);
          } catch (error) {
              console.error('Error al obtener los datos:', error);
          }
      };

      obtenerData();
  }, []);
  

  return (
    /*-Mapeo de los productos-*/
    <div className="items-list">
      {data.map((product, idx) => {
        return <Item key={product.id}{...product} />;
      })}
    </div>
  );
};
