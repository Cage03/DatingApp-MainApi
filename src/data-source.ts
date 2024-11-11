﻿import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: process.env.NODE_ENV === 'development',
    entities: ["src/database/entity/**/*.{ts,js}"],
    migrations: ["src/database/migration/**/*.{ts,js}"],
    subscribers: ["src/database/subscriber/**/*.{ts,js}"],
});
