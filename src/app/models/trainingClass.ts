export class TrainingClass {
    id?: string;
	name: string;
	timeStart: number;
    timeEnd: number;
    convertedTimeStart: string;
    convertedTimeEnd: string;
	comment: string;
    reservations: number;
    slots: number;
    available: boolean;
    reservationId: string;
    date: string;

	constructor(name: string, timeStart: number, timeEnd: number, convertedTimeStart: string, convertedTimeEnd: string, comment: string,
        reservations: number, slots: number, available: boolean, reservationId: string) {
		this.name = name;
		this.timeEnd = timeEnd;
        this.timeStart = timeStart;
        this.convertedTimeEnd = convertedTimeEnd;
        this.convertedTimeStart = convertedTimeStart;
		this.comment = comment;
        this.available = available;
        this.slots = slots;
        this.reservations = reservations;
        this.reservationId = reservationId;
	}

}