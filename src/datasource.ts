import {DataSource} from "typeorm";

const environment = process.env.NODE_ENV

const migrationPropertiesMap = {
    development: {
        entities: [
            "src/**/*entity{.ts,.js}"
        ],
        migrations: ["src/migrations/*{.ts,.js}"]
    },
    production: {
        entities: [
            "dist/**/*entity{.ts,.js}",
        ],
        migrations: ["migrations/*{.ts,.js}"]
    }
}

if (!(environment in migrationPropertiesMap)) {
    throw new Error(`Incorrect environment! Informed: ${environment}, valid: ${Object.keys(migrationPropertiesMap)}`)
}

const migrationProperties = migrationPropertiesMap[environment]

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root_password",
    database: "db",
    ...migrationProperties,
    migrationsRun: true,
    logging: true,
    synchronize: false,
})
