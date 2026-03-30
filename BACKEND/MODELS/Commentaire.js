import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Commentaire = sequelize.define('Commentaire', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Ajoute d'autres champs si besoin
    });

    Commentaire.associate = (models) => {
        Commentaire.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
        Commentaire.belongsTo(models.Discussion, { as: 'discussion', foreignKey: 'discussionId' });
        Commentaire.belongsTo(models.Events, { as: 'event', foreignKey: 'eventId' });
        Commentaire.belongsTo(models.Publications, { as: 'publication', foreignKey: 'publicationId' });
    };

    return Commentaire;
};