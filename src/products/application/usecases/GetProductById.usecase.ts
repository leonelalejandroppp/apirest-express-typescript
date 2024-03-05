import { ProductRepository } from "@/products/domain";
import { ProductNotFoundError } from "@/products/domain/exceptions/ProductNotFound.error";
import { ProductId } from "@/products/domain/valueObjects";

export class GetProductByIdUseCase {
    constructor(private productRepository: ProductRepository) { }

    async run(id: string) {
        const productId: ProductId = new ProductId(id);
        const product = await this.productRepository.getProductById(productId);
        if (!product) {
            throw new ProductNotFoundError();
        }
        return product;
    }
}