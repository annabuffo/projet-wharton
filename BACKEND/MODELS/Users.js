import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Ajoute d'autres champs si besoin
  });

  Users.associate = (models) => {
    Users.hasMany(models.Discussion, { as: 'discussions', foreignKey: 'userId' });
    Users.hasMany(models.Events, { as: 'events', foreignKey: 'userId' });
    Users.hasMany(models.Publication, { as: 'publications', foreignKey: 'userId' });
    Users.hasMany(models.Commentaire, { as: 'commentaires', foreignKey: 'userId' });
  };

  return Users;
};
