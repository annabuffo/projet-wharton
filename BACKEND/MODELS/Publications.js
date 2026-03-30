import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Publication = sequelize.define("Publication", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        date_creation: { 
            type: DataTypes.DATE,
            allowNull: false,
            unique: true,
        },
    });

    Publication.associate = (models) => {
        Publication.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
        Publication.hasMany(models.Commentaire, { as: 'commentaires', foreignKey: 'publicationId' });
        // Ajoute d'autres associations si besoin
    };

    return Publication;
};