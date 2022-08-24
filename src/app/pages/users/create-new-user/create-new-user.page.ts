import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Fare } from 'src/app/models/fare';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { FareService } from 'src/app/services/fare.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-create-new-user',
  templateUrl: './create-new-user.page.html',
  styleUrls: ['./create-new-user.page.scss'],
})
export class CreateNewUserPage implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre = '';
  email = '';
  nombreUsuario = '';
  password = '';
  errMesg = 'Error al crear usuario';
  okMsg = 'Usuario creado correctamente';
  active: boolean = true;
  guest: boolean = false;
  fareId: '';
  fares : Fare[] = [];

  isLogged = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastController: ToastController,
    private router:Router,
    private fareService: FareService) { }

    ngOnInit() {
    }
  
    ionViewWillEnter() {
      this.vaciar();
      this.cargarFares()
    }

    changeActive(event) {
      this.active = event;
      this.guest = false;
      console.log(event);
    }

    changeGuest(event) {
      this.active = false;
      this.guest = event;
      console.log(event);
    }

  onRegister() {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, 'DUMMY', this.email, 'DUMMY');
    this.nuevoUsuario.fareId = this.fareId;
    this.authService.registroByAdmin(this.nuevoUsuario).subscribe(
      data => {
        this.presentToast(this.okMsg);
        this.vaciar();
        this.router.navigate(['/list-users']);
      },
      err => {
        this.presentToast(this.errMesg);
      }
    )
  
  }

  cargarFares() {
    this.fareService.lista(100).subscribe(data => {
      this.fares = data.content;
    }, err => {
      console.log(err);
      this.presentToast('Error cargando tarifas');
    });
  }

  selectFareId(event) {
    this.fareId = event.value.id;
   }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  vaciar() {
    this.nombre = '';
    this.email = '';
    this.nombreUsuario = '';
    this.password = '';
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogged = false;
  }
  
  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
  }

}
