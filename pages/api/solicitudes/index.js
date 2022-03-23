import {
    pool
} from "../../../config/db"



export default function index(req, res) {

    switch (req.method) {
        case 'GET':
            return getSolicitud(req, res)
        case 'POST':
            return saveUsuarios(req, res)
    }
}

const getSolicitud = async (req, res) => {

    try {
        const estado = req.query.estado
        //console.log(correo)
        const [result] = await pool.query(`SELECT * FROM solicitud WHERE estado = ${estado} `)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(200).json(error.message)
        console.log(error.message)
    }


}