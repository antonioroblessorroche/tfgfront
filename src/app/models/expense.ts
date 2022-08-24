export class Expense {
    id?: string;
	amount: number;
	name: string;
    description: string;
    month: number;
    year: number;
    day: number;
    income: boolean;
    submittedBy: string;

	constructor(id: string, name: string, amount: number, description: string, year: number, month: number, day: number, income: boolean) {
		this.id = id;
		this.amount = amount;
		this.name = name;
        this.year =  year;
        this.month = month;
        this.day = day;
        this.description = description;
        this.income = income;
	}
}
