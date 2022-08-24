export class TrainingClassReservation {
    id?: string;
	user: string;
    classId: string;
	time: number;
	sessionId: string;
	userFullName: String;

	constructor(user: string, classId: string, classTime: number, className: string) {
		this.user = user;
		this.classId = classId;
		this.time = classTime;
		this.userFullName = className;
	}

}