import { ProductDescription, ProductId, ProductName, ProductQuantity } from "./valueObjects";

export class Product {
    private readonly id: ProductId;
    private readonly name: ProductName;
    private readonly description: ProductDescription;
    private readonly quantity:  ProductQuantity;

    constructor(id: string, name: string, description: string, quantity: number) {
        this.id = new ProductId(id);
        this.name = new ProductName(name);
        this.description = new ProductDescription(description);
        this.quantity = new ProductQuantity(quantity);
    }

    get getProductId() {
        return this.id;
    }

    toValues() {
        return {
            id: this.id.value,
            name: this.name.value,
            description: this.description.value,
            quantity: this.quantity.value
        }
    }
}