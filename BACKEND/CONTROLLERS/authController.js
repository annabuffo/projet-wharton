import { openDb } from '../DB/db.auth.js';

export async function getAuths(req, res, next) {
    try {
        const db = await openDb();
        const auths = await db.all("SELECT * FROM auths");
        res.json(auths);
    } catch (error) {
        next(error);
    }
}

export async function getAuthById(req, res, next) {
    try {
        const { id } = req.params;
        const db = await openDb();
        const auth = await db.get("SELECT * FROM auths WHERE id = ?", id);
        if (!auth) {
            return res.status(404).json({ message: "Auth non trouvé" });
        }
        res.json(auth);
    } catch (error) {
        next(error);
    }
}

export async function createAuth(req, res, next) {
    try {
        const { username, password, date_creation } = req.body;
        const db = await openDb();
        const result = await db.run(
            "INSERT INTO auths (username, password, date_creation) VALUES (?, ?, ?)",
            username,
            password,
            date_creation || "",
        );
        const newAuths = await db.get("SELECT * FROM auths WHERE id = ?", result.lastID);
        res.status(201).json(newAuths);
    } catch (error) {
        next(error);
    }
}

export async function updateAuth(req, res, next) {
    try {
        const { id } = req.params;
        const { username, password, date_creation } = req.body;
        const db = await openDb();
        if (!id || !username || !password || !date_creation) {
            return res.status(400).json({ message: "Tous les champs sont requis" });
        }
        await db.run(
            "UPDATE auths SET username = ?, password = ?, date_creation = ? WHERE id = ?",
            username, password, date_creation, id
        );
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export async function deleteAuth(req, res, next) {
    try {
        const { id } = req.params;
        const db = await openDb();
        const auth = await db.get("SELECT * FROM auths WHERE id = ?", id);
        if (!auth) {
            return res.status(404).json({ message: "Auth non trouvé" });
        }
        await db.run("DELETE FROM auths WHERE id = ?", id);
        res.status(204).send();
     } catch (error) {
        next(error);
     }
}
