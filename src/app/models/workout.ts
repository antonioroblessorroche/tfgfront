export class Workout {
    id?: string;
	name: string;
	description: string;
	workoutGroup: string;

	constructor(name: string, description: string, workoutGroup: string) {
		this.name = name;
		this.description = description;
		this.workoutGroup = workoutGroup;
	}

}
