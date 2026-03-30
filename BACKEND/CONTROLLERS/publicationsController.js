import { operDb } from "../db.publications.js"

export async function getPublications(req, res, next) {
    try {
        const db = await operDb();
        const publications = await db.all("SELECT * FROM publications ORDER BY date_creatio DESC");
        res.json(publications);
    } catch (error) {
        next(error);
    }
}

export async function getPublicationById(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const publications = await db.get("SELECT * FROM publications WHERE id = ?", id);
        if (!publications) {
            res.status(404).json({ message: "Publicartion non trouvé" });
        }
        res.json(publications);
    } catch (error) {
        next(error);
    }
}

export async function createPublication(req, res, next) {
    try {
        const { title, description, date_creation } = req.body;
        const db = await operDb();
        const result = await db.run(
            "INSERT INTO publications (title, description, date_creation) VALUES (?, ?, ?)",
            title,
            description,
            date_creation || "",
        );

        const newPublication = await db.get("SELECT * FROM publications WHERE id = ?", result.lastID);
        res.status(201).json(newPublication);
    } catch (error) {
        next(error);
    }
}

export async function updatePublication(req, res, next) {
    try {
        const { id } = req.params;
        const { title, description, date_creatio } = req.body;

        if (!title || !description) {
            return res.status(404).json({ message: "Le titre et la description sont requis" });
        }
        await db.run(
            "UPDATE publications SET title = ?, description = ?, date_creation = ? WHERE id = ?",
            title,
            description,
            date_creatio || "",
            id
        );
        const updatedPublication = await db.get("SELECT * FROM publications WHERE id = ?", id);
        res.json(updatedPublication);
    } catch (error) {
        next(error);
    }
}

export async function deletePubliaction(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const publication = await db.get("SELECT * FROM publications WHERE id = ?", id);
        if (!publication) {
            return res.status(404).json({ message: "Publication non trouvé" });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}