import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Discussion = sequelize.define("Discussion", {
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
        }
    });

    // hasMany = “possède plusieurs”
    // belongsTo = “appartient à un seul”


    Discussion.associate = (models) => {
        Discussion.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
        Discussion.hasMany(models.Commentaire, { as: 'commentaires', foreignKey: 'discussionId' });
        // Ajoute d'autres associations si besoin
    };

    return Discussion;
};