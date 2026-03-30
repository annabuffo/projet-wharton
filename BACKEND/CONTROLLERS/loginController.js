import  { operDb } from "../db.login.js";

export async function getLogins(req, res, next) {
    try {
        const db = await operDb();
        const logins = await db.all("SELECT * FROM logins");
        res.json(logins);
    } catch (error) {
        next(error);
    }
}

export async function getLoginById(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const Login = await db.get("SELECT * FROM logins WHERE id = ?", id);
        if (!Login)  {
            res.status(404).json({ message: "Login non trouvé" });
        }
        res.json(Login);
    } catch (error) {
        next(error);
    }
}

export async function createLogin(req, res, next) {
    try {
        const { username, password, date_creation } = req.params;
        const db = await operDb();
        const relsult = await db.run(
            "INSERT INTO logins (username, password) VALUES (?, ?, ?)",
            username, 
            password,
            date_creation || "",
        );

        const newLogin = await db.get("SELECT * FROM logins WHERE id = ?", result.lastID);
        res.status(201).json(newLogin);
    } catch (error) {
        next(error);
    }
}

export async function updateLogin(req, res, next) {
    try {
        const { id } = req.params;
        const { username, password, date_creation } = req.body;

        if (!id|| !password || !date_creation ||!username ) {
            return res.status(404).json({ message: "tous les champs sont requis" });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}

export async function deleteLogin(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const Login = await db.get("SELECT * FROM logins WHERE id = ?", id);
        
        if(!Login.changes === 0) {
            return res.status(404).json({ message: "Login non trouvé" });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}