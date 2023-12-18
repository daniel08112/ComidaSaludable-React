function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Ingrese su email"
    }
    else if (!email_pattern.test (values.email)){
        error.email = "El email es incorrecto"
    }else {
        error.email =""
    }

    if (values.password === ""){
        error.password = "Ingrese su contraseña"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Contraseña incorrecta"
    } else {
        error.password = ""
    }
    return error;
}

export default Validation;