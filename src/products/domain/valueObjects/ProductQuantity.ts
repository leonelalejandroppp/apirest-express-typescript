import { InvalidArgsError } from "@/shared/domain";

export class ProductQuantity {
    readonly value: number;

    constructor(value: number) {
        this.value = value;
        this.validateValue(value);
    }

    private validateValue(value: number) {
        if(value < 0){
            throw new InvalidArgsError("Value must be greater than zero")
        }
    }
}