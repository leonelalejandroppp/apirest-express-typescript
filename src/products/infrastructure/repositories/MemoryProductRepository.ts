import { Product, ProductRepository } from "@/products/domain";
import { ProductId } from "@/products/domain/valueObjects";

export class MemoryProductRepository implements ProductRepository {

    products: Product[] = [];

    async getProductById(id: ProductId): Promise<Product | null> {
        const product = this.products.find(product => product.getProductId.value === id.value) || null;
        return product
    }

    async getAll(): Promise<Product[]> {
        return this.products;
    }

    save(product: Product): void {
        this.products.push(product);
    }

}