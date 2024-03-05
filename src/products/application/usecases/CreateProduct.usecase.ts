import { Product, ProductRepository } from "@/products/domain";
import { ProductAlreadyExistsError } from "@/products/domain/exceptions/ProductAlreadyExists.error";
import { ProductId } from "@/products/domain/valueObjects";

export class CreateProductUseCase {
    constructor(private productRepository: ProductRepository) { }

    async run(product: Product) {
        await this.existsProduct(product.getProductId);
        await this.productRepository.save(product);
    }

    private async existsProduct(productId: ProductId) {
        const product = await this.productRepository.getProductById(productId);
        if (product) {
            throw new ProductAlreadyExistsError();
        }
    }
}