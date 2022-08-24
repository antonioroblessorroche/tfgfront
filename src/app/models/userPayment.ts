export class UserPayment {
    id?: string;
    userId: string;
	amount: number;
    month: number;
    year: number;
    method: string;

	constructor(id: string, userId: string, amount: number, year: number, month: number, method: string) {
		this.id = id;
        this.userId = userId;
		this.amount = amount;
        this.year =  year;
        this.month = month;
        this.method = method;
	}
}
