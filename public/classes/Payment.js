export class Payment {
    constructor(receiver, details, amount) {
        this.receiver = receiver;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.receiver} is owed $${this.amount} for ${this.details}`;
    }
}
