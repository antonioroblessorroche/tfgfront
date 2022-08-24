import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController, IonInfiniteScroll } from '@ionic/angular';
import { Fare } from 'src/app/models/fare';
import { Profile } from 'src/app/models/profile';
import { ReducedUser } from 'src/app/models/reducedUser';
import { UserPayment } from 'src/app/models/userPayment';
import { FareService } from 'src/app/services/fare.service';
import { ProfileService } from 'src/app/services/profile.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { UserPaymentService } from 'src/app/services/userpaymen.service';
import {AuthService} from 'src/app/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  profile: ReducedUser;
  currentFare: string;
  payments: UserPayment[] = [];
  isActive: boolean;
  isAdmin :boolean = false;
  user : string = "";
  page: 0;
  selector = "profile";

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private fareService: FareService,
    private userPaymentService: UserPaymentService,
    private tokenService: TokenService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    // this.isLogged = this.tokenService
    // this.cargar();
  }

  ionViewWillEnter() {
    this.isAdmin = this.tokenService.getAuthorities().length > 1;
    this.page = 0;
    this.cargar();
  }

  cargar() {
    this.cargarUser(this.tokenService.getUsername());
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  loadData(event) {
    event.target.disabled = false;
      this.cargarPaymentsByUser(event);
      setTimeout(() => {
        event.target.complete();
      }, 500);
    }

    cargarPaymentsByUser(event: any) {
      event.target.disabled = false;
    console.log("Event donete");
   this.userPaymentService.listaByUser(this.page, this.profile.id).subscribe(
       data => {
         console.log(data);
           let dataSize = data.content.length;
           if (dataSize > 0) {
               for (let i = 0; i < dataSize; i++) {
                   this.payments.push(data.content[i]);
               }
               this.page += 1;
           } else {
               // event.target.disabled = true;
               event.target.complete();
           }
       },
       err => {
           console.log("petó");
           console.log(err);
       }
   );
}

  cargarUser(username: string) {
    console.log(username);
    this.profileService.findByUser(username).subscribe(
      data => {
        console.log('Userdata: ' + data);
        this.profile = data;
        if (!this.isAdmin) {
          this.currentFare = data.fare.name + ' (' + data.fare.amount + '€)';
          this.cargarPayments();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarPayments() {
    this.userPaymentService.listaByUser(this.page, this.profile.id).subscribe(
        data => {
          console.log(data);
            let dataSize = data.content.length;
            if (dataSize > 0) {
                for (let i = 0; i < dataSize; i++) {
                    this.payments.push(data.content[i]);
                }
                this.page += 1;
            } else {
                this.payments = null;
            }
        },
        err => {
            console.log("petó");
            console.log(err);
        }
    );
  }
  

  presentNewPass() {
    this.presentNewPassPrompt();
  }

  presentNewMail() {
    this.presentNewMailPrompt();
  }

  presentNewUser() {
    this.presentNewUserPrompt();
  }

  presentNewName() {
    this.presentNewNamePrompt();
  }

  async presentNewMailPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modificar mail',
      message: 'Establecer nuevo correo electrónico para alertas',
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

            if (this.validateEmail(alertData.mail)) {
              this.changeMail(alertData.mail);
            } else {
              this.presentToast('Email no válido');
            }
          }
        }
      ]
    });

    await alert.present();
  }

  validateEmail(input) {
    return input.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  }

  async presentNewUserPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modificar nombre de usuario',
      message: 'Establecer nuevo nombre de usuario para inicio de sesión',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Nombre de usuario'
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
            this.changeUser(alertData.username);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentNewNamePrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modificar nombre',
      message: 'Establecer nuevo nombre completo',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre completo'
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
            this.changeName(alertData.name);
          }
        }
      ]
    });

    await alert.present();
  }

  addComments() {
        this.authService.addComments(this.profile).subscribe(
          data => {
          }, err => {
            this.presentToast(err.error.mensaje);
          })
      }

  changeUser(user: string) {
      if (user == '') {
        this.presentToast('El nombre no puede ser vacío');
      } else {
        this.profile.nombreUsuario = user;
        this.authService.newUsername(this.profile).subscribe(
          data => {
            this.presentToast(data.mensaje);
            this.cargar();
          }, err => {
            this.presentToast(err.error.mensaje);
          })
      }
  }

  changeMail(mail: string) {
    if (mail == '') {
      this.presentToast('El mail no puede ser vacío');
    } else {
      this.profile.email = mail;
      this.authService.newMail(this.profile).subscribe(
        data => {
          this.presentToast(data.mensaje);
          this.cargar();
        }, err => {
          this.presentToast(err.error.mensaje);
        })
    }
  }

  changeName(name: string) {
    if (name == '') {
      this.presentToast('El nombre no puede ser vacío');
    } else {
      this.profile.nombre = name;
      this.authService.newName(this.profile).subscribe(
        data => {
          this.presentToast(data.mensaje);
          this.cargar();
        }, err => {
          this.presentToast(err.error.mensaje);
        })
    }
  }

  async presentNewPassPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva contraseña',
      message: 'Establecer nueva contraseña de acceso al sistema',
      inputs: [
        {
          name: 'newpass',
          type: 'password',
          placeholder: 'Nueva contraseña'
        },
        {
          name: 'newpassconfirm',
          type: 'password',
          placeholder: 'Repetir contraseña'
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
            this.validateAndChangePass(alertData.newpass, alertData.newpassconfirm);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToastMsg(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  validateAndChangePass(newpass: string, newpassconfirm: string) {
    if (newpass != newpassconfirm) {
      this.presentToast('Las contraseñas introducidas no coinciden. No se cambiará la contraseña.');
    } else {
      if (newpass.length < 8) {
        this.presentToast('La contraseña debe tener al menos 8 caracteres');
      } else {
        this.profile.creds = newpass;
        this.authService.cambioPass(this.profile).subscribe(
          data => {
            this.presentToast(data.mensaje);
          }, err => {
            this.presentToast(err.error.mensaje);
          })
      }
    }
  }

  segmentChanged($event) {
    this.selector = $event.detail.value;
    console.log($event.detail.value);
  }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  borrar(id: string) {
    this.profileService.delete(id).subscribe(
      data => {
        this.presentToast('Item borrado correctamente');
        // this.cargar();
      },
      err => {
        this.presentToast('Error borrando item');
      }
    )
  }

  async deleteConfirm(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Borrado de datos',
      message: 'Confirmación de borrado de datos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
           this.borrar(id);
          }
        }
      ]
    });

    await alert.present();
  }


}
