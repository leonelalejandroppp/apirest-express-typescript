import { InvalidArgsError } from "./InvalidArgsError";

export class StringValueObject {
    readonly value: string;

    constructor(value: string) {
        this.value = value;
        this.validateValue(value);
    }

    private validateValue(value: string): void {
        if(value === null || value === undefined || value.trim() === "") {
            throw new InvalidArgsError("Value must be defined");
        }
    }
}