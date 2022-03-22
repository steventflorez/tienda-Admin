
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Modal({ display, upModal, accion, producto, rute, cargar, eliminar }) {

    
    const [imgUrl, setImgUrl] = useState()
    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        document.querySelector('#titulo').value = producto.titulo
        document.querySelector('#des').value = producto.des
        document.querySelector('#total').value = producto.total
        document.querySelector('#fin').value = producto.fin
        document.querySelector('#comi').value = producto.comicion
        setImgUrl(producto.img)

        console.log(producto)

    }, [producto])

    const clase = `modal ${display}`

    const closeModal = () => {
        upModal()
    }

    const formHandler = async (e) => {


        e.preventDefault();



        console.log(e.target.files[0])
        setFile(e.target.files[0]);
        const fil = e.target.files[0]
        const data = new FormData()

        data.append("file", fil)
        data.append("upload_preset", "productos")
        setLoading(true)

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/stevet94/image/upload", {
            method: "POST",
            body: data,
        }
        )
        const img = await res.json()
        setImgUrl(img.secure_url)
        console.log(img.secure_url)





    }

    const submitModal = async (e) => {
        e.preventDefault()
        const btn_sub = document.querySelector('#sub').textContent
        const productoNew = {
            titulo: document.querySelector('#titulo').value,
            img: imgUrl,
            descripcion: document.querySelector('#des').value,
            precio_total: document.querySelector('#total').value,
            precio_fin: document.querySelector('#fin').value,
            comicion: document.querySelector('#comi').value,
            ruta: rute,
            id: producto.id

        }
        if (btn_sub == 'agregar') {
            
            const res = await axios.post('/api/productos', {
                titulo: productoNew.titulo,
                img: productoNew.img,
                descripcion: productoNew.descripcion,
                precio_total: productoNew.precio_total,
                precio_fin: productoNew.precio_fin,
                comicion: productoNew.comicion,
                ruta: productoNew.ruta


            });

            cargar()
        } else {
            const { data: nuevo } = await axios.put('/api/productos', {
                titulo: productoNew.titulo,
                img: productoNew.img,
                descripcion: productoNew.descripcion,
                precio_total: productoNew.precio_total,
                precio_fin: productoNew.precio_fin,
                comicion: productoNew.comicion,
                ruta: productoNew.ruta,
                id: productoNew.id
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
                                <div className="form-group">
                                    <div className="input-group mb-3">

                                        <input className="form-control" type="file" id="formFile" onChange={formHandler} />

                                    </div>
                                </div>


                                <img src={imgUrl} width={150} className='img_barbero' />

                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Titulo <span className='obli'>*</span></label>
                                            <input type="text" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Nombre" />

                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Descripción <span className='obli'>*</span></label>
                                            <input type="text" className="form-control" id="des" aria-describedby="emailHelp" placeholder="Cedula" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Precio Decontado <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="total" aria-describedby="emailHelp" placeholder="Empresa" />
                                            <small id="emailHelp" className="form-text text-muted">Empresa donde trabaja.</small>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Precio Financiado <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="fin" aria-describedby="emailHelp" placeholder="Direccion" />

                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Comision <span className='obli'>*</span></label>
                                            <input type="number" className="form-control" id="comi" aria-describedby="emailHelp" placeholder="Telefono" />

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
