import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Events = sequelize.define("Events", {
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
    });

    Events.associate = (models) => {
        Events.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
        Events.hasMany(models.Commentaire, { as: 'commentaires', foreignKey: 'eventId' });
        // Ajoute d'autres associations si besoin
    };

    return Events;
};