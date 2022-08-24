export class GenerateClass {
    week: string;
    weekTime: number
	trainingCenterId: string;
	classId: string;
    constructor(week: string, weekTime: number, trainingCenterId: string, classId: string) {
        this.week = week;
        this.trainingCenterId = trainingCenterId;
        this.classId = classId;
        this.weekTime = weekTime;
    }
}