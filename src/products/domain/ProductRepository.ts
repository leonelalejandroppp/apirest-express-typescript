import { Product } from "./Product";
import { ProductId } from "./valueObjects";

export interface ProductRepository {
    getProductById(id: ProductId): Promise<Product | null>;
    getAll(): Promise<Product[]>;
    save(product: Product): void;
}