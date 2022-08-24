export class WeeklyClass {
    id?: string;
	name: string;
    time: string;
    timeName: string;
    description: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    centerId: string;
    centerName: string;

	constructor(name: string, description: string, monday: string, tuesday: string, wednesday: string, thursday: string,
        friday: string, saturday: string, sunday: string, time: string, timeName: string, centerId: string, centerName: string) {
		this.name = name;
		this.description = description;
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
        this.time = time;
        this.timeName = timeName;
        this.centerId = centerId;
        this.centerName = centerName;
	}
}