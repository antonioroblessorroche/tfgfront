export class DailyClassSession {
    trainingId: string;
    description: string;
    time: string;
    location: string;
    locationName: string;
    slots: number;
    name: string;
    reservations: number;
    index: number;
    id: string;
    userHasJoined: boolean;
    classTimestamp: number;
    classConvertedTime: string;

    constructor(trainingId: string, description: string, time: string, slots: number, location: string, name: string, locationName: string) {
		this.trainingId = trainingId;
    this.description = description;
    this.location = location;
    this.time = time;
    this.slots = slots;
    this.name = name;
    this.locationName = locationName;
	}
}
