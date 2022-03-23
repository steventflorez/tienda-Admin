import React from 'react'

export default function Tr_vendedor({vendedor,editar, eliminar }) {
  const edit = ()=>{
    editar(vendedor)
  }
  
  const eliminarArticulo=()=>{
    eliminar(vendedor.id)
    
}
  return (
    
        <tr className="table-primary">
            <th scope="row">{vendedor.id}</th>
            <td>{vendedor.nombre}</td>
            <td>{vendedor.cedula}</td>
            <td>{vendedor.telefono}</td>
            <td>{vendedor.correo}</td>
            <td>{vendedor.contraseña}</td>
            <td>{vendedor.codigo}</td>
            <td>{vendedor.ganancia_pendiente}</td>
            <td>{vendedor.ganancia_total}</td>
            <td><button type="button" onClick={edit} className="btn btn-success">Editar</button></td>
            <td><button type="button" onClick={eliminarArticulo} className="btn btn-danger">Eliminar</button></td>
            
        </tr>

    
  )
}
