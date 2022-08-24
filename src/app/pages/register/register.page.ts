import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nuevoUsuario: NuevoUsuario;
  nombre = '';
  email = '';
  nombreUsuario = '';
  password = '';
  errMesg = 'Error al crear usuario';
  okMsg = 'Usuario creado correctamente';

  isLogged = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastController: ToastController,
    private router:Router) { }

    ngOnInit() {
      this.testLogged();
    }
  
    ionViewWillEnter() {
      this.testLogged();
      this.vaciar();
    }

  onRegister() {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.registro(this.nuevoUsuario).subscribe(
      data => {
        this.presentToast(this.okMsg);
        this.vaciar();
        this.router.navigate(['/login']);
      },
      err => {
        this.presentToast(this.errMesg);
      }
    )
  
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
