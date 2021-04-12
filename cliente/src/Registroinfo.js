import React, {useState} from 'react'

import axios from 'axios'
export const Registroinfo = () => {

  const [documento, setDocumento] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')



    const guardabase = async () => {
        const res = await axios.post('/basedatos/insertarpacientes', { numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')

      }

      const actualizabase = async () => {
        const res = await axios.post('/basedatos/actualizadatos', { numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')
      }

      const borrabase = async () => {
        const res = await axios.post('/basedatos/borrar', { numid: documento, nombre, apellido });
        console.log(res.data)
        setDocumento('')
        setNombre('')
        setApellido('')
      }
    
      const onChangedc = (e) => {
        setDocumento(e.currentTarget.value);
        console.log(documento)
      };
    
      const onChangenm = (e) => {
        setNombre(e.currentTarget.value);
        console.log(nombre)
      };  

      const onChangeap = (e) => {
        setApellido(e.currentTarget.value)
      }

    const inserta = () => {
        console.log('Se hizo click insertar registro');
         guardabase()
      }

    const actualiza = () => {
        console.log('Se hizo click en actualizar registro');
         actualizabase()
      }

    const borra= () => {
        console.log('Se hizo click en borrar registro');
         borrabase()
      }



    return (
        <div  className="formdb__box-containter">
            <h3 className="auth__title">Envio INFO</h3>
            <form>
               <input 
                className="auth__input"
                type="text"
                placeholder="documento"
                name="documento"
                value={documento}
                autoComplete="off"
                onChange={onChangedc}
                />
            

            <input 
                className="auth__input"
                type="text"
                placeholder="nombre"
                name="nombre"
                value={nombre}
                autoComplete="off"
                onChange={onChangenm}
                />
               <input 
                className="auth__input"
                type="text"
                placeholder="apellido"
                name="apellido"
                value={apellido}
                onChange={onChangeap}
                autoComplete="off"
                />
                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>inserta()}
                > 
                Enviar info
                </button>  

                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>actualiza()}
                > 
                Actualizar reg
                </button>

                <button
                className="btn btn-primary" 
                type="button"
                onClick={()=>borra()}
                > 
                Borrar reg
                </button>   

            </form>
        </div>
    )
}
