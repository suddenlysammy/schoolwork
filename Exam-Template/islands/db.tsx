import { Database } from "jsr:@db/sqlite";

const db = new Database("users.db");

//creating database
db.exec(`
    -- DROP TABLE IF EXISTS users;
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL
    );   
    -- DROP TABLE IF EXISTS requests;
    CREATE TABLE IF NOT EXISTS requests(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        request TEXT NOT NULL,
        status TEXT NOT NULL,
        user INT,
        FOREIGN KEY(user) REFERENCES users(id)
    );
`);

export function createUser(username: string, password:string) {
    db.exec("INSERT INTO users (username, password) VALUES (?, ?)", [username, password]);
}

export function createRequest(request: string, status: string, user: number) {
    db.exec("INSERT INTO requests (request, status, user) VALUES (?, ?, ?)", [request, status, user]);
}

export function checkUser(username: string, password: string): number|null{
    const findUser = db.prepare("select id FROM users WHERE username = ? AND password = ?");
    const [result] = findUser.all(username, password)
    return result?.id
}

type RequestRecord = {id: number, request: string,status: string, user: number}

export function queryRequestAll(): RequestRecord[]{
    return db.prepare("SELECT * FROM requests").all()
}

export function queryRequestById(id: number): RequestRecord{
    const [result] = db.prepare("SELECT * FROM requests WHERE id = ?").all<RequestRecord>(id)
    return result
}

export function queryRequestByUser(id: number): RequestRecord[]{
    return db.prepare("SELECT * FROM requests WHERE user = ?").all(id)
}