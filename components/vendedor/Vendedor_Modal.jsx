import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Vendedor_Modal({ display, upModal, accion, vendedor,  cargar }) {
    const clase = `modal ${display}`
    const closeModal = () => {
        upModal()
    }
    useEffect(() => {
        document.querySelector('#nom').value = vendedor.nombre
        document.querySelector('#ced').value = vendedor.cedula
        document.querySelector('#tel').value = vendedor.telefono
        document.querySelector('#cor').value = vendedor.correo
        document.querySelector('#contra').value = vendedor.contraseña
        

       

    }, [vendedor])

    const submitModal = async (e) => {
        e.preventDefault()
        const btn_sub = document.querySelector('#sub').textContent
        const vendedorNew = {
            nomnre: document.querySelector('#nom').value,
            cedula: document.querySelector('#ced').value,
            telefono: document.querySelector('#tel').value,
            correo: document.querySelector('#cor').value,
            contraseña: document.querySelector('#contra').value,
            codigo: document.querySelector('#tel').value,


        }
        if (btn_sub == 'agregar') {

            const res = await axios.post('/api/vendedor', {
                nombre: document.querySelector('#nom').value,
                cedula: document.querySelector('#ced').value,
                telefono: document.querySelector('#tel').value,
                correo: document.querySelector('#cor').value,
                contraseña: document.querySelector('#contra').value,
                codigo: document.querySelector('#tel').value,


            });

            cargar()
        } else {
            const { data: nuevo } = await axios.put('/api/vendedor', {
                nombre: document.querySelector('#nom').value,
                cedula: document.querySelector('#ced').value,
                telefono: document.querySelector('#tel').value,
                correo: document.querySelector('#cor').value,
                contraseña: document.querySelector('#contra').value,
                codigo: document.querySelector('#tel').value,
                id:vendedor.id
            })

        }

        closeModal()
        cargar()

    }

    return (
        <div>
            <div className={clase}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{accion}</h5>
                            <button type="button" onClick={closeModal} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" />
                            </button>
                        </div>
                        <div className="modal-body">


                            <form onSubmit={submitModal}>


                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Nombre <span className='obli'>*</span></label>
                                            <input type="text" className="form-control" id="nom" aria-describedby="emailHelp" placeholder="Nombre" />

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Cedula <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="ced" aria-describedby="emailHelp" placeholder="Cedula" />

                                        </div>
                                    </div>



                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo <span className='obli'>*</span></label>
                                            <input type="email" className="form-control" id="cor" aria-describedby="emailHelp" placeholder="Correo" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Contraseña <span className='obli'>*</span></label>
                                            <input type="password" className="form-control" id="contra" aria-describedby="emailHelp" placeholder="Contraseña" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Telefono <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="tel" aria-describedby="emailHelp" placeholder="Telefono" />

                                        </div>
                                    </div>





                                </div>

                                <div className="modal-footer">
                                    <button type="submit" id='sub' className="btn btn-primary">{accion}</button>

                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
