import { ProductRepository } from "@/products/domain";

export class GetAllProductsUseCase {
    constructor(private productRepository: ProductRepository) { }

    async run() {
        const products = await this.productRepository.getAll();
        return products.map(product => product.toValues());
    }
}