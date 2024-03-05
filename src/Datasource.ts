import { DataSource } from "typeorm";
import { ProductEntity } from "./products/infrastructure/entities/Product.entity";

export const Datasource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [ProductEntity],
})