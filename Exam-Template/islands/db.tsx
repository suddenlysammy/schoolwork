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
`);

export function createUser(username: string, password:string) {
    db.exec("INSERT INTO users (username, password) VALUES (?, ?)", {username, password});
}
