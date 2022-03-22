/* eslint-disable react-hooks/rules-of-hooks */

import { CardProducto } from '../components/CardProducto'
import { Nav } from '../components/Nav'
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Modal from '../components/Modal';


export default function productos() {

    const rauter = useRouter()
    const [display, setDisplay] = useState('d-none')
    const [edit, setEdit] = useState(false)
    const rute = `${rauter.query.father}${rauter.query.children}${rauter.query.element}`
    const [pro, setPro] = useState({
        titulo: '',
        img: '',
        des: '',
        total: '',
        fin: '',
        comicion: ''
    })
    const [accion, setAccion] = useState()
    const [products, setProducts] = useState([{
        id: 1,
        titulo: '',
        img: '',
        des: '',
        total: '',
        fin: '',
        comicion: ''

    }])

    useEffect(() => {
        const cargarProductos = async () => {


            const { data: productos } = await axios.get('http://localhost:3000/api/productos', {
                params: {
                    ruta: rute

                }
            })
            setProducts(productos)
            console.log(productos, 'estos son los productos');
        }

        cargarProductos()

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
        setPro({
            titulo: '',
            img: '',
            des: '',
            total: '',
            fin: '',
            comicion: ''

        })
        upModal()
    }

    const editarModal = (producto) => {
        setAccion('editar')
        setPro({
            id: producto.id,
            img: producto.img,
            titulo: producto.titulo,
            des: producto.descripcion,
            total: producto.precio_total,
            fin: producto.precio_fin,
            comicion: producto.comicion
        })
        upModal()
    }

    const eliminarArticulo = async (idd) => {
        const res = await axios.delete('http://localhost:3000/api/productos', {
            params: {
                id: idd
            }
        })
        changueEdit()
    }










    return (
        <Nav>

            <div className="row cont">
                <div>
                    <button type="button" onClick={agregar} className="btn btn-primary">Agregar Producto +</button>

                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">descripcion</th>
                            <th scope="col">Precio Decontado</th>
                            <th scope="col">Precio Financiado</th>
                            <th scope="col">Comicion</th>
                            <th scope="col">Edital</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((producto) => (
                            <CardProducto
                                key={producto.id}
                                product={producto}
                                editar={editarModal}
                                eliminar={eliminarArticulo}
                            />
                        ))}

                    </tbody>
                </table>
            </div>

            <Modal display={display} upModal={upModal} accion={accion} producto={pro} rute={rute} cargar={changueEdit} />

        </Nav>
    )




}
