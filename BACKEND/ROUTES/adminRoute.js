import express from 'express';
import { isAuthenticated, isAdmin } from '../MIDDLEWARES/auth.js';
import { validate } from '../MIDDLEWARES/validator.js';
import { body } from 'express-validtor';
import db from '../MODELS/db.js';

const { Users, Discussion, Events, Publication, Commentaire, Login } = db;

const router = express.Router();

router.use(isAuthenticated, isAdmin)


// ---------- USERS ---------- 
router.get('/Users', async (req, res) => {
    try {
        const users = await Users.findAll({
            include: [
                { model: Users, as: 'author', attributes: ['id', 'username'] },
                { model: Discussion, as: 'discussions' },
                { model: Events, as: 'events' },
                { model: Publication, as: 'publications' },
                { model: Commentaire, as: 'commentaires' },
                { model: Login, as: 'logins' }
            ]
        });
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
    }
});

router.put('/Users/:id', async (req, res) => {
    try {
        const users = await Users.findByPk(req.params.id);
        if (!users) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }
        await users.update(req.body);
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/Users/:id', async (req, res) => {
    try {
        const users = await Users.findByPk(req.params.id);
        if (!users) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' })
        }

        await users.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ---------- DISCUSSIONS ---------- 


router.get('/discussions', async (req, res) => {
    try {
        const discussions = await Discussion.findAll();
        res.status(200).json(discussions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/discussions', [
    body('title').notEmpty().WithMessage('Le titre est requis')
], validate, async (req, res) => {
    try {
        const discussion = await Discussion.create(req.body);
        res.status(201).json(discussion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/discussions/:id', async (req, res) => {
    try {
        const discussion = await Discussion.findAllByPk(res.params.id);
        if (!discussion) {
            return res.status(404).json({ error: 'Discussion non trouvée' });
        }
        await discussion.update(req.body);
        res.status(200).send(discussion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/discussions/:id', async (req, res) => {
    try {
        const discussion = await Discussion.findAllByPk(req.params.id);
        if (!discussion) {
            return res.status(404).json({ error: 'Discussion non trouvée' });
        }

        await discussion.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ---------- EVENTS ---------- 

router.get('/events', async (req, res) => {
    try {
        const events = await Events.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/events', [
    body('title').notEmpty().WithMessage('Le titre est requis')
], validate, async (req, res) => {
    try {
        const events = await Events.create(req.body);
        res.status(201).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/events/:id', async (req, res) => {
    try {
        const events = await Events.findAllByPk(req.params.id);
        if (!events) {
            return res.status(404).json({ error: 'Evèenment non trouvé' });
        }
        await events.update(req.body);
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/events/:id', async (req, res) => {
    try {
        const events = await Events.findByPk(req.params.id);
        if (!events) {
            return res.status(404).json({ error: 'Evènement non trouvé' });
        }
        await events.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ---------- PUBLICATION ----------

router.get('/publications', async (req, res) => {
    try {
        const publications = await Publication.findAll();
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/publications', [
    body('title').notEmpty().WithMessage('Le titre est requis')
], validate, async (req, res) => {
    try {
        const publications = await Publication.create(req.body);
        res.status(201).json(publications);
    } catch (error) {
        res.statsu(500).json({ error: error.message });
    }
});

router.put('/publications/:id', async (req, res) => {
    try {
        const publications = await Publication.findByPk(req.params.id);
        if (!publications) {
            return res.status(404).json({ error: 'Publication non trouvée' });
        }
        await publications.update(req.body);
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/publications/:id', async (req, res) => {
    try {
        const publications = await Publication.findByPk(req.params.id);
        if (!publications) {
            return res.status(404).json({ error: 'Publication non trouvée' });
        }
        await publications.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ---------- COMMENTAIRES ----------  

router.get('/commentaires', async (req, res) => {
    try {
        const commentaires = await Commentaires.findAll();
        res.status(200).json(commentaires);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/commentaires', [
    body('content').notEmpty().WithMessage('Le contenu est requis')
], validate, async (req, res) => {
    try {
        const commentaires = await Commentaires.create(req.body);
        res.status(201).json(commentaires);

    } catch (error) {
        res.status(500).json({ error: error.messsage });
    }
});

router.put('/commentaires/:id', async (req, res) => {
    try {
        const commentaires = await Commentaires.findByPk(req.params.id);
        if (!commentaires) {
            return res.status(404).json({ error: 'Commentaire non trouvé' });
        }
        await commentaires.update(req.body);
        res.status(200).json(commentaires);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/commentaires/:id', async (req, res) => {
    try {
        const commentaires = await Commentaires.findAllByPk(req.params.id);
        if (!commentaires) {
            return res.status(404).json({ error: 'Commentaire non trouvé' });
        }
        await commentaires.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ---------- LOGINS ----------  

router.get('/logins', async (req, res) => {
    try {
        const logins = await Login.findAll();
        res.status(200).json(logins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/Logins', [
    body('username').notEmpty().WithMessage('Le nom d\'utilisateur est requis'),
    body('password').notEmpty().WithMessage('Le mot de passe est requis')
], validate, async (req, res) => {
    try {
        const logins = await Login.create(req.body);
        res.statys(201).json(logins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/Logins/:id', async (req, res) => {
    try {
        const logins = await Login.findByPk(req.params.id);
        if (!logins) {
            return res.status(404).json({ error: 'Login non trouvé' });
        }
        await logins.update(req.body);
        res.status(200).json(logins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/Logins/:id', async (req, res) => {
    try {
        const logins = await Login.findByPk(req.params.id);
        if (!logins) {
            return res.status(404).json({ error: 'Login non trouvé' });
        }
        await logins.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});