import { operDb } from "../db.discussions.js";

export async function getDiscussions(req, res, next) {
    try {
        const db = await operDb();
        const discussions = await db.all("SELECT * FROM discussions ORDER BY date_creation DESC");
        res.json(discussions);
    } catch (error) {
        next(error);
    }
}

export async function getDiscussionById(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const discussion = await db.get("SELECT * FROM discussions WHERE id = ?", id);
        if (!discussion) {
            res.status(404).json({ message: "Discussion non trouvée" });
        }
        res.json(discussion);
    } catch (error) {
        next(error);
    }
}

export async function createDiscussion(req, res, next) {
    try {
        const { title, description, content, date_creation } = req.body;
        const db = await operDb();
        const result = await db.run(
            "INSERT INTO discussions (title, description, content, date_creation) VALUES (?, ?, ?, ?)",
            title,
            description,
            content,
            date_creation || "",
        );

        const newDiscussion = await db.get("SELECT * FROM discussions WHERE id = ?", result.lastID);
        res.status(201).json(newDiscussion);
    } catch (error) {
        next(error);
    }
}

export async function updateDiscussion(req, res, next) {
    try {
        const { id } = req.params;
        const { title, description, content, date_creation } = req.body;

        if (!title || !description || !content || !date_creation) {
            return res.status(404).json({ message: "Tous les champs sont requis" });
        }

        await db.run(
            "UPDATE discussions SET title = ?, description = ?, content = ?, date_creation = ? WHERE id = ?",
            title,
            description,
            content,
            date_creation || "",
            id
        );

        const updateDiscussion = await db.get("SELECT * FROM discussions WHERE id = ?", id);
        res.json(updateDiscussion);

    } catch (error) {
        next(error);
    }
}

export async function deleteDiscussion(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const discussion = await db.get("SELECT * FROM discussions WHERE id = ?", id);

        if (!discussion.changes === 0) {
            return res.status(404).json({ messae: "Discussion non trouvée" });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}

