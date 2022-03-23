import React from 'react'

export default function Tr_solicitud({solicitud}) {
    return (

        <tr className="table-primary">
            <th scope="row">{solicitud.nombre}</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button type="button"  className="btn btn-success">Editar</button></td>
            
        </tr>
    )
}
