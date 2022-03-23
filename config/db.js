import { createPool } from "mysql2/promise"




 const pool = createPool({
    host: 'bezuu7hshsl623jjvty2-mysql.services.clever-cloud.com',
    user: 'ux0xj3npxeln5pyi',
    password:'Pj4z3chd74ZISsfH7sd',
    database:'bezuu7hshsl623jjvty2'
}); 

export {pool};