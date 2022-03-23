import {
    pool
} from "../../../config/db"



export default function index(req, res) {

    switch (req.method) {
        case 'GET':
            return getVendedor(req, res)
        case 'POST':
            return saveVendedor(req, res)
        case 'PUT':
            return upVendedor(req, res)
        case 'DELETE':
            return deleteVendedor(req, res)
    }
}

const getVendedor = async (req, res) => {
    
    try {
        
        const [result] = await pool.query(`SELECT * FROM vendedor`)
        return res.status(200).json(result)
    } catch (error) {
        console.log(error.message, 'entro en error')
        return res.status(200).json(error.message)
        console.log(error.message)
    }


}

const saveVendedor = async (req, res) => {
    const {
        nombre,
        cedula,
        telefono,
        correo,
        contraseña,
        codigo
    } = req.body
    const [result] = await pool.query('INSERT INTO vendedor SET ?', {
        nombre,
        cedula,
        telefono,
        correo,
        contraseña,
        codigo,
        ganancia_total: '0',
        ganancia_pendiente:'0',
        admin_id:'1'

    })
    console.log(result);
    return res.status(200).json('!Vendedor  registrado Con exito¡');
}

const upVendedor = async (req, res) => {
    const {
        nombre,
        cedula,
        telefono,
        correo,
        contraseña,
        id
    } = req.body

    try {
        const [result] = await pool.query(
            'UPDATE vendedor SET nombre = ?, cedula = ? , telefono = ? , correo = ? , contraseña = ?  WHERE id = ?',
            [nombre, cedula, telefono, correo, contraseña, id])

        console.log(id, result)
        return res.status(200).json(result);


    } catch (error) {
        console.log(error.message, 'aquiiii')

    }

}

const deleteVendedor = async (req, res) => {
    try{
        const id = req.query.id
    const [result] = await pool.query(`DELETE FROM vendedor WHERE id = ${id} `)
    return res.status(200).json(result);
    }catch(error){
        console.log(error.message)
    }
    
}