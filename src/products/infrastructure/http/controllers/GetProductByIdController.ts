import { GetProductByIdUseCase } from "@/products/application/usecases/GetProductById.usecase";
import { Request, Response } from "express";

export class GetProductByIdController {
    constructor(private readonly getProductByIdUseCase: GetProductByIdUseCase) { }

    async run(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const product = await this.getProductByIdUseCase.run(productId);
            return res.status(200).json(product?.toValues());
        } catch(error) {
            const errorMessage = (error as Error).message;
            console.error(error);
            return res.status(500).json({errorMessage});
        }
    }
}