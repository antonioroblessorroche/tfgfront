import { TrainingClass } from "./trainingClass";

export class MasterDailyClasses {
    id?: string;
    classes: string[];
    classesDetail: TrainingClass[];

    constructor(classesDetail: TrainingClass[], classes: string[]) {
      this.classes = classes;
		  this.classesDetail = classesDetail;

	}

}
