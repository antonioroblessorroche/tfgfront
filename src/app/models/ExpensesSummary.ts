export class ExpenseSummary {
	numberOfActiveUsers: string;
    totalPaidUsers: string;
    remainingAmountUsers: string;
    totalExpectedUsers: string;
    remainingUnpaidUsers: string;

	constructor(numberOfActiveUsers: string, totalPaidUsers: string, remainingAmountUsers: string, totalExpectedUsers: string, remainingUnpaidUsers: string,) {
		this.numberOfActiveUsers = numberOfActiveUsers;
        this.remainingAmountUsers =  remainingAmountUsers;
        this.remainingAmountUsers = remainingAmountUsers;
        this.totalExpectedUsers = totalExpectedUsers;
        this.remainingUnpaidUsers = remainingUnpaidUsers;
	}
}
