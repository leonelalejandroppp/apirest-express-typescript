import { Request, Response } from "express";
import { CreateProductDto } from "../dto/CreateProductDto";
import { CreateProductUseCase } from "@/products/application/usecases/CreateProduct.usecase";
import { ProductMapper } from "../mapper/ProductMapper";

export class CreateProductController {
    constructor(private readonly createProductUseCase: CreateProductUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const productDto = req.body as CreateProductDto;
            const mapper = new ProductMapper();
            await this.createProductUseCase.run(mapper.toProduct(productDto));
            return res.status(201).json({ok: true});
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.error(error);
            return res.status(500).json({errorMessage});
        }
    }
}