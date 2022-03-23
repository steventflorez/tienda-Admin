import React from 'react'

export default function Tr_solicitud({solicitud}) {
    return (

        <tr className="table-primary">
            <th scope="row">{solicitud.cedula}</th>
            <td>{solicitud.nombre}</td>
            <td>{solicitud.empresa}</td>
            <td>{solicitud.telefono}</td>
            <td>{solicitud.correo}</td>
            <td>{solicitud.referido}</td>
            <td>{solicitud.cuotas}</td>
            <td>{solicitud.direccion}</td>
            <td>{solicitud.vendedor_id}</td>
            <td>{solicitud.productos_id}</td>
            <td><button type="button"  className="btn btn-success">Editar</button></td>
            
        </tr>
    )
}
