import { StringValueObject } from "@/shared/domain";

export class ProductId extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}