import {
    pool
} from "../../../config/db"



export default function index(req, res) {

    switch (req.method) {
        case 'GET':
            return getProductos(req, res)
        case 'POST':
            return saveProductos(req, res)
        case 'PUT':
            return upProductos(req, res)
        case 'DELETE':
            return deleteProductos(req, res)
    }
}

const getProductos = async (req, res) => {

    try {
        const ruta = req.query.ruta
        const [result] = await pool.query(`SELECT * FROM productos WHERE ruta = ${ruta} `)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }


}

const saveProductos = async (req, res) => {
    const {
        titulo,
        img,
        descripcion,
        precio_total,
        precio_fin,
        comicion,
        ruta
    } = req.body
    const [result] = await pool.query('INSERT INTO productos SET ?', {
        titulo,
        img,
        descripcion,
        precio_total,
        precio_fin,
        comicion,
        ruta
    })
    console.log(result);
    return res.status(200).json('!Usuario registrado Con exito¡');
}

const upProductos = async (req, res) => {
    const {
        titulo,
        img,
        descripcion,
        precio_total,
        precio_fin,
        comicion,
        ruta,
        id
    } = req.body

    try {
        const [result] = await pool.query(
            'UPDATE productos SET titulo = ?, img = ? , descripcion = ? , precio_total = ? , precio_fin = ? , comicion = ? WHERE id = ?',
            [titulo, img, descripcion, precio_total, precio_fin, comicion, id])

        console.log(id, result)
        return res.status(200).json(result);


    } catch (error) {
        console.log(error.message, 'aquiiii')

    }

}

const deleteProductos = async (req, res) => {
    try{
        const id = req.query.id
    const [result] = await pool.query(`DELETE FROM productos WHERE id = ${id} `)
    return res.status(200).json(result);
    }catch(error){
        console.log(error.message)
    }
    
}