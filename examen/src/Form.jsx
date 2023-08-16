import React from 'react';
import {useState } from "react";


function Form ({onAddPersona}){

const [nombre, setNombre] = useState("");
const [serie, setSerie] = useState (""); 


function validarPrimerInput(nombre) {
    let validar = true;

    if (nombre.length < 3 || nombre.trim() !== nombre) {
        validar = false;
    }
    if (validar == false) {
        alert("Por favor chequea que la información sea correcta")
    }
    return validar;
}

function validarSegundoInput(serie) {
    let validar = true;

    if (serie.length < 6) {
        validar = false;
    }
    if (validar == false) {
        alert("Por favor chequea que la información sea correcta")
    }
    return validar;
}


const handleSubmit = (e)=>{
    e.preventDefault();

if ((validarPrimerInput(nombre)) && validarSegundoInput(serie)) {
        onAddPersona({nombre, serie});
        setNombre("");
        setSerie("");
   }
}

return(
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>    
        </div>
        <div>
            <input type="text" placeholder='Ingrese su serie favorita' value={serie} onChange={(e) => setSerie(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value="Enviar"/>
        </div>
    </form>
)
}

export default Form;
