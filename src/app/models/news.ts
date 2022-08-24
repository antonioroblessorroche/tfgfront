export class News {
    id?: string;
	description: string;
	title: string;
    date: number;
    parsedDate: string;

	constructor(id: string, title: string, description: string, date: number) {
		this.id = id;
		this.description = description;
		this.title = title;
        this.date = date;
	}

}
