/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Nav } from '../components/Nav'
import Tr_solicitud from '../components/solicitud/Tr_solicitud';

export default function solicitudes() {

    const [solicitudes,setSolicitudes]=useState([{
        id: '1',
        titulo: ''
    }])
    const [edit, setEdit] = useState(false)
    const [estado,setEstado]=useState('1')
    

     useEffect(() => {
        const cargarSolicitudes = async () => {
            console.log(estado, 'este es el estado')

            const { data: solicitudes } = await axios.get('/api/solicitudes', {
                params: {
                    estado

                }
            })
            setSolicitudes(solicitudes)
            console.log(solicitudes, 'estos son las solicitudes');
        }

        cargarSolicitudes()

    }, [estado]) 

    const changeEstado=(e)=>{
        if(document.getElementById('1').selected){
            setEstado('1')
        }
        if(document.getElementById('2').selected){
            setEstado('2')
        }
        if(document.getElementById('3').selected){
            setEstado('3')
        }
            
    }
    


    return (
        <Nav>
            <div className="cont row">
                <div>
                    <label className="form-label mt-4">Estado de la solicitud</label>
                    <select onChange={changeEstado} className="form-select" id="estados">
                        <option  id='1'>solisitado </option>
                        <option id='2'>aprobado</option>
                        <option id='3'>rechazado</option>
                        
                    </select>

                </div>
                <br />

                <form className="d-flex">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                </form>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Cedula</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Referido</th>
                            <th scope="col">Cuotas</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">id vendedor</th>
                            <th scope="col">id producto</th>
                            <th scope="col">editar</th>




                        </tr>
                    </thead>
                    <tbody>
                        { solicitudes.map((solicitud) => (
                        <Tr_solicitud
                            key={solicitud.id}
                            solicitud={solicitud}

                        />
                    )) }

                    </tbody>
                </table>
            </div>
        </Nav >
    )
}
