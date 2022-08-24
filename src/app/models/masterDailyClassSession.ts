export class MasterDailyClassSession {
    trainingId: string;
    description: string;
    time: string;
    location: string;
    slots: number;
    name: string;

    constructor(trainingId: string, description: string, time: string, slots: number, location: string, name: string) {
		this.trainingId = trainingId;
    this.description = description;
    this.location = location;
    this.time = time;
    this.slots = slots;
    this.name = name;
	}
}
