import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import axios from "axios";



function Tabla() {
/*-Definicion de const que se ocuparan para el HTML y Base de datos-*/
  const [title,setProducto] = useState("");
  const[price, setPrecio]=useState("");
  const[id, setId_producto]=useState("");
  const[category, setCategoria]=useState("");
  const[description, setDescripion]=useState("");
  const[cantidad,setCantidad]= useState("");
  const[Imagen,setImagen]= useState("");
  const [cosas,setCosas]=useState([]);
  const[editar,seteditar] = useState(false);

//* AGREGAR REGISTRO////////////////*//
  const add =()=>{
    axios.post("http://localhost:3001/createpro", {
      title: title,
      price: price,
      id: id,
      category: category,
      description: description,
      cantidad: cantidad,
      Imagen: Imagen
     
    }).then(()=>{
      alert("Producto Registrado");
  getMostrar();

    });
  }
  //* MOSTRAR REGISTRO////////////////*//
  const getMostrar =()=>{
    axios.get("http://localhost:3001/mostrar").then((response)=>{
      setCosas(response.data);
    });
  }
  //* ELIMINAR REGISTRO////////////////*//
  const eliminarRegistro = (id)=>{
    axios.delete(`http://localhost:3001/eliminar/${id}`).then(()=>{
    getMostrar();

  });
}
  //* MODIFICAR REGISTRO////////////////*//
  const update = ()=>{
    axios.put("http://localhost:3001/update",{
        title: title,
      price: price,
      id: id,
      category: category,
      description: description,
      cantidad: cantidad,
      Imagen: Imagen
        
      
    }).then(()=>{
      getMostrar();
      alert("Registro Editado");
      limpiar();
    });
}

const limpiar = ()=>{
  /*-Limpiar-*/
  setProducto("");
  setPrecio("");
  setCategoria("");
  setDescripion("");
  setId_producto("");
  setCantidad("");
  setImagen("");
  seteditar(false);
}

  const editarAlumno = (val)=>{
    /*-Editar-*/
    seteditar(true);
    setId_producto(val.id);
    setProducto(val.title);
    setPrecio(val.price);
    setCategoria(val.category);
    setDescripion(val.description);
    setCantidad(val.cantidad);
    setImagen(val.Imagen);
    
  }

  return (
    //* HTML de CRUD*//
    <div className="App ">
      <div className="Datos">
      <div class="card bg-light">
      <h5 class="card-title ">Crud React</h5>
      <div className="card-footer text-muted bg-dark text-light ">
          {
            editar?
            <div> 
            <button className="btn btn-warning m-2" onClick={update}>Actualizar</button>
            <button className="btn btn-danger m-2" onClick={limpiar}>Cancelar</button>
            </div>
            :
            <button className='btn btn-primary' onClick={add}>Guardar datos</button>
          }
          <button className='btn btn-success' onClick={getMostrar}>Visualizar</button>
      
        </div>
      <div class="card-body bg-dark text-light ">
      <label >ID:<input
        onChange={(event)=>{
          setId_producto(event.target.value);
        }}       
        type="text" className='form-control ' id="id" name="id" value={id} /></label>

      <label >Producto:<input
        onChange={(event)=>{
          setProducto(event.target.value);
        }}       
        type="text" className='form-control ' id="title" name="title" value={title}/></label>

        <label >Descripcion:<input
        onChange={(event)=>{
          setDescripion(event.target.value);
        }}       
        type="text" className='form-control ' id="description" name="description" value={description}/></label>

        <label >Precio:<input
        onChange={(event)=>{
          setPrecio(event.target.value);
        }}       
        type="text" className='form-control ' id="price" name="price" value={price}/></label>

        <label >Categoria:<input
        onChange={(event)=>{
          setCategoria(event.target.value);
        }}       
        type="text" className='form-control ' id="category" name="category" value={category}/></label>

        <label >cantidad:<input
        onChange={(event)=>{
          setCantidad(event.target.value);
        }}       
        type="text" className='form-control ' id="cantidad" name="cantidad" value={cantidad}/></label>

        <label >Imagen:<input
        onChange={(event)=>{
          setImagen(event.target.value);
        }}       
        type="text" className='form-control ' id="Imagen" name="Imagen" value={Imagen}/></label>
  </div>
      </div>
      </div>
      
      <div className="Lista">
      <table className="table table-dark">
        <thead classNanem="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Categoria</th>
            <th scope="col">Precio</th>
            <th scope="col">Borrar</th>
            <th scope="col">Editar </th>
            </tr>
            </thead>
           
              <tbody>
              {cosas.map((val,key) => {
              return <tr key = {val.id}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.description}</td>
                  <td>{val.category}</td>
                  <td>{val.price}</td>
                  <td>{val.cantidad}</td>
                  
                  <td><button className="btn btn-danger" onClick={()=>{eliminarRegistro(val.id);}}>Borrar</button></td>
                  <td><button className="btn btn-success" onClick={()=>{editarAlumno(val);}}>Modificar</button></td>
                </tr>
                 })
                }
              </tbody>
      </table>
      </div>
    </div>
  );
}

export default Tabla;