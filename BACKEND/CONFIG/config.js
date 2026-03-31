import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const defaultDatabasePath = join(__dirname, "..", "app.db");
const testDatabasePath = join(__dirname, "..", "app.test.db");

const commonOptions = {
	logging: false,
	seederStorage: "sequelize",
};

const createSqliteConfig = (storage) => ({
	...commonOptions,
	dialect: "sqlite",
	storage,
});

const createServerConfig = (databaseName) => ({
	...commonOptions,
	username: process.env.DB_USER || "postgres",
	password: process.env.DB_PASSWORD || "postgres",
	database: process.env.DB_NAME || databaseName,
	host: process.env.DB_HOST || "127.0.0.1",
	port: Number(process.env.DB_PORT || 5432),
	dialect: process.env.DB_DIALECT || "postgres",
});

const useDatabaseUrl = Boolean(process.env.DATABASE_URL);

const config = {
	development: useDatabaseUrl
		? {
			  ...commonOptions,
			  use_env_variable: "DATABASE_URL",
			  dialect: process.env.DB_DIALECT || "postgres",
		  }
		: createSqliteConfig(defaultDatabasePath),
	test: createSqliteConfig(testDatabasePath),
	production: useDatabaseUrl
		? {
			  ...commonOptions,
			  use_env_variable: "DATABASE_URL",
			  dialect: process.env.DB_DIALECT || "postgres",
		  }
		: createServerConfig("wharton_prod"),
};

export default config;
export { config };
