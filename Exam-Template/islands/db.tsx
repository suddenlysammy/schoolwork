import { Database } from "jsr:@db/sqlite";

const db = new Database("users.db");

//creating database
db.exec(`
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    );   
    DROP TABLE IF EXISTS complaints;
    CREATE TABLE complaints(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        complaint TEXT NOT NULL,
        status TEXT NOT NULL
    )
`);

export function createUser(username: string, password:string) {
    db.exec("INSERT INTO users (username, password) VALUES (?, ?)", {username, password});
}

