export class Profile {
    id?: string;
	user: string;
	fullName: string;
    birthDate: number;
    measures: Map<string, string>;
    goals : Map<String, String>
    
    constructor(fullName: string, user: string,
        birthDate: number, measures: Map<String, String>, goals : Map<String, String>) {
		this.fullName = fullName;
        this.user = user;
        this.birthDate = birthDate;
	}
}
