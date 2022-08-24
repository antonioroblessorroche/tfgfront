export class Fare {
    id?: string;
	amount: number;
	name: string;
	numOfActivities: number;

	constructor(id: string, name: string, amount: number) {
		this.id = id;
		this.amount = amount;
		this.name = name;
	}
}
