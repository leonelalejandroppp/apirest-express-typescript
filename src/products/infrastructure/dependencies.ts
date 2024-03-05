import { CreateProductUseCase } from "../application/usecases/CreateProduct.usecase";
import { GetAllProductsUseCase } from "../application/usecases/GetAllProducts.usecase";
import { GetProductByIdUseCase } from "../application/usecases/GetProductById.usecase";
import { CreateProductController } from "./http/controllers/CreateProductController";
import { GetAllProductsController } from "./http/controllers/GetAllProductsController";
import { GetProductByIdController } from "./http/controllers/GetProductByIdController";
import { MemoryProductRepository } from "./repositories/MemoryProductRepository";
import { SQLiteProductRepository } from "./repositories/SQLiteProductRepository";

// export const productRepository = new MemoryProductRepository();
export const productRepository = new SQLiteProductRepository();

export const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
export const createProductUseCase = new CreateProductUseCase(productRepository);
export const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);

export const getAllProductsController = new GetAllProductsController(getAllProductsUseCase);
export const createProductController = new CreateProductController(createProductUseCase);
export const getProductByIdController = new GetProductByIdController(getProductByIdUseCase);