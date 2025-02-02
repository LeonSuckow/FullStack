import {DataSource} from "typeorm";

const environment = process.env.NODE_ENV

const migrationPropertiesMap = {
    development: {
        entities: [
            "src/**/*entity{.ts,.js}"
        ],
        migrations: ["src/migrations/*{.ts,.js}"]
    },
    default: {
        entities: [
            "dist/**/*entity{.ts,.js}",
        ],
        migrations: ["migrations/*{.ts,.js}"]
    }
}

const migrationProperties = environment === 'development' ? migrationPropertiesMap.development : migrationPropertiesMap.default

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
