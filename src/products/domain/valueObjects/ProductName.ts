import { StringValueObject } from "@/shared/domain/StringValueObject";

export class ProductName extends StringValueObject{
    constructor(readonly value: string) {
        super(value);
    }
}