import  { openDb } from "../db.logins.js";

export async function getLogins(req, res, next) {
    try {
        const db = await openDb();
        const logins = await db.all("SELECT * FROM logins");
        res.json(logins);
    } catch (error) {
        next(error);
    }
}

export async function getLoginById(req, res, next) {
    try {
        const { id } = req.params;
        const db = await openDb();
        const login = await db.get("SELECT * FROM logins WHERE id = ?", id);
        if (!login)  {
            return res.status(404).json({ message: "Login non trouvé" });
        }
        res.json(login);
    } catch (error) {
        next(error);
    }
}

export async function createLogin(req, res, next) {
    try {
        const { username, password, date_creation } = req.body;
        const db = await openDb();
        const result = await db.run(
            "INSERT INTO logins (username, password, date_creation) VALUES (?, ?, ?)",
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
        const db = await openDb();
        if (!id || !username || !password || !date_creation) {
            return res.status(400).json({ message: "Tous les champs sont requis" });
        }
        await db.run(
            "UPDATE logins SET username = ?, password = ?, date_creation = ? WHERE id = ?",
            username, password, date_creation, id
        );
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export async function deleteLogin(req, res, next) {
    try {
        const { id } = req.params;
        const db = await openDb();
        const login = await db.get("SELECT * FROM logins WHERE id = ?", id);
        if (!login) {
            return res.status(404).json({ message: "Login non trouvé" });
        }
        await db.run("DELETE FROM logins WHERE id = ?", id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}