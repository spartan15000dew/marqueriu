'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

interface Persona{
  nombre:string,
  apellido:string
}

const initialStatePersona:Persona = {
  apellido:"",
  nombre: ""
}

export default function Home() {
  const miStorage = window.localStorage
  const [persona,setPersona]=useState(initialStatePersona)
  const [personas, setPersonas] = useState<Persona[]>([])
  const [eNombre,setENombre]=useState("")

  useEffect(()=>{
    let listadoStr = miStorage.getItem("personas")
    if(listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setPersonas(listado)
    }
  },[])

  const handleRegistrar = ()=>{
    miStorage.setItem("personas",JSON.stringify([...personas,persona]))
  }

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

      <button onClick={()=>{handleRegistrar()}}>registrar</button>
    </form>
  )
}
