import {DataSource} from "typeorm";

export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root_password",
    database: "db",
    entities: [
        "dist/**/*entity{.ts,.js}",
        "src/**/*entity{.ts,.js}"
    ],
    migrations: ["migrations/*{.ts,.js}"],
    migrationsRun: true,
    logging: true,
    synchronize: false,
})
