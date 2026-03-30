import { readdirSync } from "fs";
import { basename as _basename, join, dirname, basename } from "path";
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { config } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);
const basename = _basename(__filename);
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
const db = {};

let sequelize;
if (dbConfig.use_env_variable) {
    sequelieze = new Sequelize(dbConfig.url, dbConfig);
} else {
    sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);
}

const modelFiles = readdirSync(__dirname);
    filter((file =>  {
        return (
            file.indexof('.') !== 0 && 
            file !== basename && 
            file.slice(-3) === '.js' &&
            file.indexof('.test.js') === -1
        )
    }
));

for (const file of modelFiles) {
    const modelModule = await import(join(__dirname, file));
    db[model.name] = modelModule.default(sequelize, Sequelize.DataTypes);
    db[model.name].associate(db);
}


  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  export default db;