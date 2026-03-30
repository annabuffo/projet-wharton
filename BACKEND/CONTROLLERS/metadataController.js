import db from '../MODELS/index.js';

const { Commentaire, Metadata, Discussion, Login, Events, Publication, Users } = db;

export const getAllCommentaires = async (req, res) => {
    try {
        const commentaires = await Commentaire.findAll();
        res.status(200).json(commentaires);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const createCommentaire = async (req, res) => {
    try {
        const { content, publicationId, userId } = req.body;

        const newCommentaire = await Commentaire.create({
            content,
            publicationId,
            userId,
        });

        res.status(201).json(newCommentaire);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllMatadata = async (req, res) => {
    try {
        const metadata = await Metadata.findAll();
        res.status(200).json(metadata);
    } catch (error) {
        res.status(500).json({ messsage: error.message });
    }
};

export const createMetadata = async (req, res) =>  {
    try {
        const { key, value } = req.body;

        const newMetadata = await Metadata.create({ 
            key, 
            value 
        });

        res.status(201).json(newMetadata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllDiscussion = async (req, res) => {
    try {
        const discussions = await Discussion.findAll();
        res.status(200).json(discussions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createDiscusssion = async (req, res) => {
    try {
        const { title, content } = req.body;

        const newDiscussion = await Discussion.create({
            title,
            content
        });
    
        res.status(201).json(newDiscussion);    
    } catch (error) {
        res.status(500).json({ message: error.message });
    } 
};

export const getAllLogin = async (req, res) => {
    try {
        const logins = await Login.findAll();
        res.status(200).json(logins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const newLogin = await Login.create({
            username,
            password
        });

        res.status(201).json(newLogin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllEvents = async (req, res) => {
    try {
        const events = await Events.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createEvent = async (req, res) => {
    try {
        const { name, date } = req.body;

        const newEvent = await Events.create({
            name,
            date
        });

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllPublication = async (req, res) => {
    try {
        const publications = await Publication.findAll();
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPublication = async (req, res) => {
    try {
        const { title, content } = req.body;

        const newPublication= await Publication.create({
            title,
            content
        });

        res.status(201).json(newPublication);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.status(200).json(users);
    } catch (error) {$
        res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const newUser = await Users.create({
            username,
            email,
            password
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};