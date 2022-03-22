import { createPool } from "mysql2/promise"


const pool = createPool({
    host: 'beo9r083da8wdien1wqg-mysql.services.clever-cloud.com',
    user: 'udgyxk2dkoirddet',
    password:'EAqu7WX0tzEVGOGaGHhp',
    database:'beo9r083da8wdien1wqg'
});

export {pool};