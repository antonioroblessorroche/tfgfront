import { MasterDailyClassSession } from "./masterDailyClassSession";
import { TrainingClass } from "./trainingClass";

export class DailyClassesMaster {
    id?: string;
    classesDetail: TrainingClass[];
    dailyClassId: string;
    masterClassId: string;
    time: string;
    dailyClasses: MasterDailyClassSession[]

    constructor(classesDetail: TrainingClass[], dailyClassId: string, masterClassId: string, time: string) {
		this.classesDetail = classesDetail;
    this.dailyClassId = dailyClassId;
    this.masterClassId = masterClassId;
    this.time = time;
	}

}
