/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Nav } from '../components/Nav'
import Tr_vendedor from '../components/vendedor/Tr_vendedor';
import Vendedor_Modal from '../components/vendedor/Vendedor_Modal';

export default function vendedores() {

    const [display, setDisplay] = useState('d-none')
    const [edit, setEdit] = useState(false)
    const [accion, setAccion] = useState()
    const [ven, setVen] = useState({
        nomnre: '',
        cedula: '',
        telefono: '',
        correo: '',
        contraseña: '',
        codigo: ''
    })
    const [vendedores, setVendedores] = useState([{
        id: 1,
        nomnre: '',
        cedula: '',
        telefono: '',
        correo: '',
        contraseña: '',
        codigo: ''

    }])
    useEffect(() => {
        const cargarVendedores = async () => {


            const { data: vendedores } = await axios.get('/api/vendedor')
            setVendedores(vendedores)
            console.log(vendedores, 'estos son los productos');
        }

        cargarVendedores()

    }, [edit])

    const changueEdit = () => {
        if (edit) {
            setEdit(false)
        } else {
            setEdit(true)
        }
    }

    const upModal = () => {

        if (display == 'd-none') {
            setDisplay('d-block')
        } else {
            setDisplay('d-none')
        }
    }

    const agregar = () => {
        setAccion('agregar')
        setVen({
            nombre: '',
            cedula: '',
            telefono: '',
            correo: '',
            contraseña: '',
            codigo: ''

        })
        upModal()
    }

    const editarModal = (vendedor) => {
        setAccion('editar')
        setVen({
            id: vendedor.id,
            nombre: vendedor.nombre,
            cedula: vendedor.cedula,
            telefono: vendedor.telefono,
            correo: vendedor.correo,
            contraseña: vendedor.contraseña,
            codigo: vendedor.codigo
        })
        upModal()
    }

    const eliminarArticulo = async (idd) => {
        const res = await axios.delete('/api/vendedor', {
            params: {
                id: idd
            }
        })
        changueEdit()
    }

    return (
        <Nav>
            <div className="cont row">
                <div>
                    <button type="button" onClick={agregar} className="btn btn-primary">Agregar Vendedor</button>

                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cedula</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Pendiente</th>
                            <th scope="col">Total</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendedores.map((vendedor) => (
                            <Tr_vendedor
                                key={vendedor.id}
                                vendedor={vendedor}
                                editar={editarModal}
                                eliminar={eliminarArticulo}

                            />
                        ))}

                    </tbody>
                </table>
            </div>
            <Vendedor_Modal display={display} upModal={upModal} accion={accion} vendedor={ven} cargar={changueEdit} />
        </Nav>
    )
}
