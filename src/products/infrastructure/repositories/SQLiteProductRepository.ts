import { Repository } from "typeorm";
import { Datasource } from "@/Datasource";
import { Product, ProductRepository } from "@/products/domain";
import { ProductId } from "@/products/domain/valueObjects";
import { ProductEntity } from "../entities/Product.entity";
import { ProductMapper } from "../http/mapper/ProductMapper";

export class SQLiteProductRepository implements ProductRepository {

    private readonly productRepository: Repository<ProductEntity>;
    private readonly productMapper: ProductMapper;

    constructor() {
        this.productRepository = Datasource.getRepository(ProductEntity);
        this.productMapper = new ProductMapper();
    }

    async getProductById(id: ProductId): Promise<Product | null> {
        const productEntity = await this.productRepository.findOneBy({
            id: id.value
        })

        if(!productEntity) {
            return null;
        }
        
        return this.productMapper.entityToProduct(productEntity);
    }

    async getAll(): Promise<Product[]> {
        const productsEntities = await this.productRepository.find();
        return productsEntities.map(productEntity => this.productMapper.entityToProduct(productEntity));
    }

    save(product: Product): void {
        const productEntity: ProductEntity = this.productMapper.productToEntity(product);
        this.productRepository.save(productEntity);
    }

}