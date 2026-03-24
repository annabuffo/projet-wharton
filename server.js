const express = require('express');
const path = require('path');
const app = express();

// servir les fichiers statiques (CSS/JS/images etc.) si présents dans FRONTEND
app.use(express.static(path.join(__dirname, 'FRONTEND')));

// route d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FRONTEND', 'PAGES', 'login.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Démarrage de l'écoute sur http://localhost:${PORT}`);
});