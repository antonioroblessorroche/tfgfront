import { MenuDiet } from './menuDiet';

export class Diet {
    id?: string;
	user: string;
	description: string;
	comments: string;
    year: number;
    month: number;
    day: number;
    menus: MenuDiet[];

	constructor(description: string, comments: string, user: string,
            year: number, month: number, day: number) {
		this.description = description;
		this.comments = comments;
        this.user = user;
        this.year = year;
        this.month = month;
        this.day = day;

	}

}
