import { readdirSync } from "fs";
import { basename, dirname, extname, join } from "path";
import { Sequelize } from "sequelize";
import { fileURLToPath, pathToFileURL } from "url";
import config from "../CONFIG/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const currentFile = basename(__filename);
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
const db = {};

if (!dbConfig) {
    throw new Error(`Aucune configuration Sequelize trouvee pour l'environnement ${env}.`);
}

const sequelize = dbConfig.use_env_variable
    ? new Sequelize(process.env[dbConfig.use_env_variable], dbConfig)
    : new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

const modelFiles = readdirSync(__dirname).filter((file) => {
    return (
        file !== currentFile &&
        extname(file) === ".js" &&
        !file.endsWith(".test.js")
    );
});

for (const file of modelFiles) {
    const modelModule = await import(pathToFileURL(join(__dirname, file)).href);
    const modelFactory = modelModule.default;

    if (typeof modelFactory !== "function") {
        continue;
    }

    const model = modelFactory(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
}

Object.keys(db).forEach((modelName) => {
    if (typeof db[modelName].associate === "function") {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;