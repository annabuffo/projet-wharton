import { operDb } from "../db.events.js";

export async function getEvents(req, res) {
    try {
        const db = await operDb();
        const events = await db.all("SELECT * FROM events ORDER BY date_creation DESC");
        res.json(events);
    } catch (error) {
        next(error);
    }
}

export async function getEventById(req, res) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const event = await db.get("SELECT * FROM events WHERE id = ?", id);
        if (!event) {
            res.status(404).json({ message: "Event non trouvé" });
        }
        res.json(event);
    } catch (error) {
        next(error);
    }
}

export async function createEvent(req, res) {
    try {
        const { title, description, date_event } = req.body;
        const db = await operDb();
        const result = await db.run(
            "INSERT INTO events (title, description, date_event) VALUES (?, ?, ?)",
            title,
            description,
            date_event || "",
        );

        const newEvent = await db.get("SELECT * FROM events WHERE id = ?", result.lastID);
        res.status(201).json(newEvent);
    } catch (error) {
        next(error);
    }
}

export async function updateEvent(req, res) {
    try {
        const { id } = req.params;
        const { title, description, date_event } = req.body;

        if (!title || !description) {
            return res.status(404).json({ message: "Le titre et la description sont requis" });
        }

        await db.run(
            "UPDATE events SET title = ?, description = ?, date_event = ? WHERE id = ?",
            title,
            description,
            date_event || "",
            id
        );

        const updateEvent = await db.get("SELECT * FROM events WHERE id = ?", id);
        res.json(updateEvent);
    } catch (error) {
        next(error);
    }
}

export async function deleteEvent(req, res) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const event =  await db.run("DELETE FROM events WHERE id = ?", id);
        if (result.changes === 0) {
            return res.status(404).json({ message: "Event non trouvé" });
        }
        res.status(204).send(); 
    } catch (error) {
        next(error);
    }
}