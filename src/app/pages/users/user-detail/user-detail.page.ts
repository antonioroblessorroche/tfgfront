import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonInfiniteScroll, ModalController, ToastController } from '@ionic/angular';
import { Fare } from 'src/app/models/fare';
import { Profile } from 'src/app/models/profile';
import { ReducedUser } from 'src/app/models/reducedUser';
import { UserPayment } from 'src/app/models/userPayment';
import { FareService } from 'src/app/services/fare.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { UserPaymentService } from 'src/app/services/userpaymen.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  profile: ReducedUser;
  fares: Fare[] = [];
  //MOCKED DATA
  // selectedFare: string;
  currentFare: Fare;
  payments: UserPayment[] = [];
  isActive: boolean;
  isAdmin: boolean;

  user : string = "";
  page: 0;

  selector = "profile";

  constructor(
    private userService: UserService,
    private fareService: FareService,
    private userPaymentService: UserPaymentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private tokenService: TokenService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    // this.page = 0;
    // this.cargarFares();
    // this.cargar();
  }

  ionViewWillEnter() {
    this.payments = [];
    this.page = 0;
    this.cargarFares();
    this.cargar();
    this.cargarPayments();
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
    const id = this.activatedRoute.snapshot.params.id;
    this.userPaymentService.listaByUser(this.page, id).subscribe(
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

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

    changeActive(event) {
      this.profile.active = event;
      this.profile.activationRejected = false;
    }

    changeAdmin(event) {
      this.profile.admin = event;
    }

  cargarPayments() {
    const id = this.activatedRoute.snapshot.params.id;
    this.userPaymentService.listaByUser(this.page, id).subscribe(
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
            }
        },
        err => {
            console.log("petó");
            console.log(err);
        }
    );
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
    this.profile.fareId = event.value.id;
    for (let i = 0; i < this.fares.length; i++) {
      if (this.profile.fareId == this.fares[i].id) {
        this.currentFare = this.fares[i];
      }
    }
   }

  segmentChanged($event) {
    this.selector = $event.detail.value;
    console.log($event.detail.value);
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    // if (this.tokenService.getAuthorities().length > 1) {
      this.userService.userdataById(id).subscribe(
        data => {
          this.profile = data;
          for (let i = 0; i < this.fares.length; i++) {
            if (this.profile.fareId == this.fares[i].id) {
              this.currentFare = this.fares[i];
            }
          }
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );

    // }
    //  else {
    //   this.user = this.tokenService.getUsername();
    //   this.profileService.findByUser(this.user).subscribe(
    //     data => {
    //       this.profiles = data.content;
    //       console.log(this.profiles);
    //     },
    //     err => {
    //       console.log("petó");
    //       console.log(err);
    //     }
    //   );
    // }

  }

  actualizar() {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.actualizar(this.profile.id, this.profile).subscribe(
      data => {
        this.presentToast("Usuario actualizado correctamente");
      }, err => {
        this.presentToast("Error actualizando usuario");
      }
    );
  }


  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }


}
