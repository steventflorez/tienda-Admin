


export const CardProducto = ({ product, editar, eliminar }) => {

  const edit = ()=>{
    editar(product)
  }
  
  const eliminarArticulo=()=>{
    eliminar(product.id)
    
}

  return (
    
        <tr className="table-primary">
          <th scope="row">{product.titulo}</th>
          <td>{product.descripcion}</td>
          <td>{product.precio_total}</td>
          <td>{product.precio_fin}</td>
          <td>{product.comicion}</td>
          <td><button type="button" onClick={edit} className="btn btn-success">Editar</button></td>
          <td><button type="button" onClick={eliminarArticulo} className="btn btn-danger">Eliminar</button></td>
        </tr>
     
  )
}
