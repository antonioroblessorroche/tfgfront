import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: LoginUsuario;
  nombreUsuario = '';
  password = '';
  errMesg = 'Error al iniciar sesión';

  isLogged = false;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastController: ToastController,
    private alertController: AlertController,
    private router:Router
  ) { }

  ngOnInit() {
    this.testLogged();
  }

  ionViewWillEnter() {
    this.testLogged();
    this.vaciar();
  }

  vaciar() {
    this.nombreUsuario = '';
    this.password = '';
  }

  onLogin() {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.isLogged = true;
        this.router.navigate(['/']);
      },
      err => {
        this.presentToastMsg(err.error.mensaje);
      }
    )
  }

  presentRetrievePass() {
    this.presentAlertPrompt()
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recuperar contraseña',
      message: 'Se le enviará un correo electrónico con la nueva contraseña.',
      inputs: [
        {
          name: 'mail',
          type: 'email',
          placeholder: 'Correo electrónico'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: (alertData) => {
            this.sendNewPass(alertData.mail);
          }
        }
      ]
    });

    await alert.present();
  }

  sendNewPass(mail: string) {
    let userVar = new NuevoUsuario(null, null, mail, null);
    this.authService.newPass(userVar).subscribe(
      data => {
        console.log(data.mensaje);
        this.presentToastMsg(data.mensaje);
      },
      err => {
        console.log(err);
        this.presentToastMsg(err.mensaje);
      }
    )
  }

  async presentToastMsg(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: this.errMesg,
      duration: 2000
    });
    toast.present();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogged = false;
  }
  
  testLogged(): void {
    this.isLogged = this.tokenService.getToken() != null;
  }

}
