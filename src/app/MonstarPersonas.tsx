import React, { useEffect, useState } from "react";
import { Persona } from './interfaces/IPersonas'

export const MostrarPersonas = () => {
    const miStorage = window.localStorage
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        let listadoStr = miStorage.getItem("personas")
        if(listadoStr != null){
            let listado = JSON.parse(listadoStr)
            setPersonas(listado)
        }
    })
    return (
        <div>{personas[0].nombre}</div>
    )
}
export default MostrarPersonas