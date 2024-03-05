import { InvalidArgsError, StringValueObject } from "@/shared/domain";

export class ProductDescription extends StringValueObject {
    constructor(readonly value: string) {
        super(value);
        this.minLengthValid(value);
    }

    private minLengthValid(value: string): void {
        if(value.length <= 200) {
            throw new InvalidArgsError("Value must be at least 200 characters")
        }
    }
}