import { operDb } from "../db.users.js";

export async function getUsers(req, res, next) {
    try {
        const db = await operDb();
        const users = await db.all("SELECT * FROM users");
        const usersWithLogins = await Promise.all(users.map(async (user) => {
            const Login = await db.get("SELECT * FROM logins WHERE id = ?", user.login_id);
            return { ...user, Login };
        }));
        res.json(usersWithLogins);
    } catch (error) {
        next(error);
    }
}

export async function getUserById(req, res , next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const user = await db.get("SELECT * FROM users WHERE id = ?", id);
        if(!user) {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.json(user);
    }  catch (error) {
        next(error);
    }
}

export async function createUser(req, res, next) {
    try {
        const  { username, email, password, login_id} = req.params;
        const db = await operDb();
        const result = await db.run(
            "INSERT INTO users (username, email, password, login_id) VALUES (?, ?, ?, ?)",
            username,
            email,
            password,
            login_id || "",
        )

        const newUser = await db.get("SELECT * FROM users WHERE id = ?", result.lastID);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
}

export async function updateUser(req, res, next) {
    try {
        const { id } = req.params;
        const { username, email, password, login_id } = req.body;

        if(!username || !email || !password || !login_id) {
            return res.status(404).json({ message: "Tous les champs sont requis" });   
        }

        await db.run(
            "UPDATE users SET username = ?, email = ?, password = ?, login_id = ? WHERE id = ?",
            username,
            email,
            password,
            login_id || "",
            id
        );

        const updateUser = await db.get("SELECT * FROM users WHERE id = ?", id);
        res.json(updateUser);
    } catch (error) {
        next(error);
    }
}

export async function deleteUser(req, res, next) {
    try {
        const { id } = req.params;
        const db = await operDb();
        const user = await db.get("SELECT * FROM users WHERE id = ?", id);

        if(!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.status(204).json();
    } catch (error) {
        next(error);
    }
}