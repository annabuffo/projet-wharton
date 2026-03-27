import { operDb } from "../db.commentaires.js";

export async function getCommentaires(req, res, next) {
    try { 
        const db = await operDb();
        const commentaires = await db.all(" SELECT * FROM commentaires ORDER BY date_creation DESC");
        res.json(commentaires);
    } catch (error) {
        next(error);
    }
}
export async function getCommentaireById(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const commentaire = await db.get("SELECT * FROM commentaires WHERE id = ?", [id]);
        if (!commentaire) {
            res.status(404).json({ message: "Commentaire non trouvé" });
        }
        res.json(commentaire);
    } catch (error) {
        next(error); 
    }
}

export async function createCommentaire(req, res, next) {
    try {
        const { content, author } = req.body;
        const db = await operDb();
        const result = await db.run(
            "INSERT INTO commentaires (content, author) VALUES (?, ?, ?)",
            content,
            author,
            date_creation || "",
        );

        const newCommentaire = await db.get("SELECT * FROM commentaires WHERE id = ?", result.lastID);
        res.status(201).json(newCommentaire);
    } catch (error) {
        next(error);
    }
}

export async function updateCommentaire(req, res , next) {
    try {
        const { id } = req.params;
        const { content, author } = req.body;

        if (!content || !author) {
            return res.status(404).json({ message: "Le contenu et l'auteur sont requis"})
        }

        await db.run(
            "UPDATE commentaires SET content = ?, author = ?, date_creation = ? WHERE id = ?",
            content,
            author,
            date_creation || "",
            id
        );
        const updateCommentaire = await db.get("SELECT * FROM commentaires WHERE id = ?", id);
        res.json(updateCommentaire);
     } catch (error) {
        next(error);
     }
}

export async function deleteCommentaire(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const commentaire = awaitdb.get("SELECT * FROM commentaires WHERE id = ?", id);

        if (!commentaire.changes === 0) {
            res.status(404).json({ messsage: "Commentaire non trouvé" });
        }
        await db.run("DELETE FROM commentaires WHERE id = ?", id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
} 