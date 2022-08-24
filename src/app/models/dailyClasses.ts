import { DailyClassSession } from "./DailyClassSession";
import { MasterDailyClassSession } from "./masterDailyClassSession";
import { TrainingClass } from "./trainingClass";

export class DailyClasses {
    id?: string;
    classesDetail: TrainingClass[];
    dailyClassId: string;
    masterClassId: string;
    time: number;
    dailyClasses: DailyClassSession[]
    year: number;
    month: number;
    day: number;

    constructor(classesDetail: TrainingClass[], dailyClassId: string, masterClassId: string, time: number) {
		this.classesDetail = classesDetail;
    this.dailyClassId = dailyClassId;
    this.masterClassId = masterClassId;
    this.time = time;
	}

}