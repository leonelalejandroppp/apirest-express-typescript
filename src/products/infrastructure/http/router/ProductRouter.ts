import express, { Router } from "express";
import { createProductController, getAllProductsController, getProductByIdController } from "../../dependencies";

const productRouter: Router = express.Router();

productRouter.get('/', getAllProductsController.run.bind(getAllProductsController));
productRouter.post('/', createProductController.run.bind(createProductController));
productRouter.get('/:id', getProductByIdController.run.bind(getProductByIdController));

export default productRouter;