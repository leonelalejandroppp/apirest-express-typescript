import { Request, Response } from "express";
import { GetAllProductsUseCase } from "@/products/application/usecases/GetAllProducts.usecase";

export class GetAllProductsController {

    constructor(private readonly getAllProductsUseCase: GetAllProductsUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const products = await this.getAllProductsUseCase.run();
            return res.status(200).json(products);
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.error(error);
            return res.status(500).json({errorMessage});
        }
    }
}