import { Workout } from "./workout";

export class TrainingSession {
    id?: string;
	userId: string;
	comments: string;
	workouts: Workout[];
    workoutIds: string[];
	year: number;
	month: number;
	day: number;
	date: string;


	constructor(userId: string, comments: string,workouts: Workout[], workoutIds: string[], year: number, month: number, day: number) {
		this.userId = userId;
		this.comments = comments;
		this.workouts = workouts;
        this.workoutIds = workoutIds;
		this.year = year;
		this.month = month;
		this.day = day;
	}

}
