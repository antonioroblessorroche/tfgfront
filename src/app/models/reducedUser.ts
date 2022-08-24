import { Fare } from "./fare";

export class ReducedUser {
    id: string;
    nombre: string;
    nombreUsuario: string;
    email: string;
    fareId: string;
    birthDate: string;
    comments: string;
    userComents: string;
    fare: Fare;
    admin: boolean;
    active: boolean;
   activationRejected: boolean;
   creds: string;

    constructor(nombre: string, nombreUsuario: string, id: string, email: string,
            fareId: string, birthDate: string, comments: string, fare: Fare,
            isActive: boolean, isAdmin: boolean, isActivationRejected: boolean, userComments: string) {
        this.nombreUsuario = nombreUsuario;
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.fareId = fareId;
        this.birthDate = birthDate;
        this.comments = comments;
        this.fare = fare;
        this.admin = isAdmin;
        this.active = isActive;
        this.activationRejected = isActivationRejected;
        this.userComents = userComments;
    }
}
