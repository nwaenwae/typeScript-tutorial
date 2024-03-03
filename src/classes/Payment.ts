import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
  constructor(
    readonly receiver: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.receiver} is owed $${this.amount} for ${this.details}`;
  }
}
