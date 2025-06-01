//import the database

import { Database } from "jsr:@db/sqlite";

const db = new Database("userTable.db");

db.exec(`
    CREATE TABLE IF NOT EXIST users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
    )   
`);

export function createUser(username: string, email: string, password:string) {
    db.exec("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", {username, email, password});
}