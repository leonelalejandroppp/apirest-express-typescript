import { Product } from "@/products/domain";
import { CreateProductDto } from "../dto/CreateProductDto";
import { ProductEntity } from "../../entities/Product.entity";

export class ProductMapper {
    constructor(){}

    toProduct({id, name, description, quantity}: CreateProductDto): Product {
        return new Product(id, name, description, quantity);
    }

    productToEntity(product: Product): ProductEntity {
        const productEntity = new ProductEntity();
        const { id, name, description, quantity } = product.toValues();
        productEntity.id = id;
        productEntity.name = name;
        productEntity.description = description;
        productEntity.quantity = quantity;
        return productEntity;
    }

    entityToProduct({id, name, description, quantity}: ProductEntity): Product {
        const product = new Product(id, name, description, quantity);
        return product;
    }
}