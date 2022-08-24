export class TrainingCenter {
    id?: string;
	description: string;
	name: string;

	constructor(id: string, name: string, description: string) {
		this.id = id;
		this.description = description;
		this.name = name;
	}

}
