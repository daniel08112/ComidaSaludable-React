const fs = require ("fs");
const express= require("express");
const app= express();
const mysql = require("mysql");
const cors =require ("cors");

app.use(cors());
app.use(express.json());

/*CONEXIONA LA BASE DE DATOS *//////////////////////////
const db= mysql.createConnection ({
    host: 'localhost',
    database: 'tienda_react',
    user: 'root',
    password: ''
    
    
});
/* PRUEBA DE CONEXION*//////////////////////////////////////////////////
db.connect((err)=>{
    if(err){
        console.log("error al conectar a la base de datos:",err)

    }else{
        console.log("conexion a la base de datos exitosa")
    }
})
/* registrar////////////////////////////////*/
app.post("/create",(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const direccion= req.body.direccion;

    db.query('INSERT INTO cuentas (name, email, password, direccion) VALUES (?,?,?,?)',[name, email, password, direccion],
    (err,result)=>{
        if(err){
            console.log(err);

        }else {
            res.send("Alumno registrado con exito");
        }
    }
);
});

app.post("/login",(req,res)=>{
    
    const email=req.body.email;
    const password=req.body.password;
   

    db.query('SELECT * FROM cuentas WHERE email=? AND password=? ',[email, password],
    (err,result)=>{
        if(err){
            console.log(err);

        }else {
            res.send("Inicio de Sesion exitoso");
        }
    }
);
});

app.post("/createpro",(req,res)=>{
    const id=req.body.id;
    const title=req.body.title;
    const category=req.body.category;
    const price=req.body.price;
    const description=req.body.description;
    const cantidad=req.body.cantidad;
    const Imagen=req.body.Imagen;
    
    db.query('INSERT INTO productos2 (id, title,category, price, description, cantidad,Imagen) VALUES (?,?,?,?,?,?,?)',[id, title,category, price, description, cantidad,Imagen],
    (err,result)=>{
        if(err){
            console.log(err);

        }else {
            res.send("Producto registrado con exito");
        }
    }
);
    
});

/* mostrar////////////////////////////////*/
app.get("/mostrar",(req,res)=>{

    db.query('SELECT * FROM productos2',
    (err,result)=>{
        if(err){
            console.log(err);

        }else {
            res.send(result);
        }
    }
);
    
});

/* actualizar/////////////////////////////////*/
app.put("/update",(req,res)=>{
    const id=req.body.id;
    const title=req.body.title;
    const category=req.body.category;
    const price=req.body.price;
    const description=req.body.description;
    const cantidad=req.body.cantidad;
    const Imagen=req.body.Imagen;
    

    db.query('UPDATE productos2 SET title=?, category=?, price=?, description=?, cantidad=?, Imagen=? WHERE id =?',[ title, category, price, description, cantidad,Imagen, id],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Alumno Actualizado con Exito");
        }
    }
    );

});
/* eliminar/////////////////////////////////*/

app.delete("/eliminar/:id_producto",(req,res)=>{
    const id = req.params.id;
    db.query('DELETE FROM productos2 WHERE id =?',id,
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Alumno ELIMINADO con Exito");
        }
    }
    );

});


    


app.listen (3001,()=>{
    console.log("corriendo en el puerto 3001");
});
