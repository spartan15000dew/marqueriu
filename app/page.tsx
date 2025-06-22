'use client'
import Image from "next/image";
import { useState } from "react";

interface Persona{
  nombre:string,
  apellido:string
}
const initialStatePersona:Persona = {
  apellido:"",
  nombre: ""
}

export default function Home() {
  const [persona,setPersona]=useState(initialStatePersona)
  const [eNombre,setENombre]=useState("")
  const handlePersona=(name:string,value:String)=>{
    setPersona(
      {
        ...persona,
        [name]:value
      }
    )
    if (name == "nombre" && value.length<3){
      setENombre("El nombre de tener 3 caracteres como minimo")
    }else if(name == "nombre" && value.length>3){
      setENombre("")
    }
  }

  return(
    <form>
      <h1>{persona.nombre} {persona.apellido}</h1>
      <label>Nombre</label><br/>
      <input
        name = "nombre"
        type = "text"
        placeholder="Nombre"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/><br/>
      <span>eNombre</span><br/>

      <label>Apellido</label><br/>
      <input
        name="apellido"
        type="text"
        placeholder="Apellido"
        onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/><br/>
      <span>eNombre</span><br/>
      <button>registrar</button>
    </form>
  )
}

