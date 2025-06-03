import { hash } from "jsr:@denosaurs/plug@1/util";
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
        status TEXT NOT NULL,
        requestUser INT,
        FOREIGN KEY(requestUser) REFERENCES users(id)
    )
`);

export function createUser(username: string, password:string) {
    db.exec("INSERT INTO users (username, password) VALUES (?, ?)", {username, password});
}

export function createComplaint(complaint: string, status: string, requestUser: number) {
    db.exec("INSERT INTO complaints (complaint, status, requestUser) VALUES (?, ?, ?)", {complaint, status, requestUser});
}
