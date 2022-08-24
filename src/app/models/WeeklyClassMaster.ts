import { Workout } from "./workout";

export class WeeklyClassMaster {
    id?: string;
	name: string;
    description: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
	


	constructor(name: string, description: string, monday: string, tuesday: string, wednesday: string, thursday: string,
        friday: string, saturday: string, sunday: string) {
		this.name = name;
		this.description = description;
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
	}

}
