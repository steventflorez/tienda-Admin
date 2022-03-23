import { createPool } from "mysql2/promise"


/* const pool = createPool({
    host: 'localhost',
    user: 'root',
    password:'Andrpro2021.',
    database:'tiendacolombia'
}); */

 /* const pool = createPool({
    host: 'bezuu7hshsl623jjvty2-mysql.services.clever-cloud.com',
    user: 'ux0xj3npxeln5pyi',
    password:'Pj4z3chd74ZISsfH7sd',
    database:'bezuu7hshsl623jjvty2'
});   */

const pool = createPool({
    host: 'beo9r083da8wdien1wqg-mysql.services.clever-cloud.com',
    user: 'udgyxk2dkoirddet',
    password:'EAqu7WX0tzEVGOGaGHhp',
    database:'beo9r083da8wdien1wqg'
});  

export {pool};