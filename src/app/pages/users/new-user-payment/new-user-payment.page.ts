import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Expense } from 'src/app/models/expense';
import { Fare } from 'src/app/models/fare';
import { ReducedUser } from 'src/app/models/reducedUser';
import { UserPayment } from 'src/app/models/userPayment';
import { ExpenseService } from 'src/app/services/expenses.service';
import { FareService } from 'src/app/services/fare.service';
import { UserService } from 'src/app/services/user.service';
import { UserPaymentService } from 'src/app/services/userpaymen.service';

@Component({
  selector: 'app-new-user-payment',
  templateUrl: './new-user-payment.page.html',
  styleUrls: ['./new-user-payment.page.scss'],
})
export class NewUserPaymentPage implements OnInit {


  constructor(
    private userService: UserService,
    private fareService: FareService,
    private paymentSerice: UserPaymentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController) { }

  date: string = (new Date()).toISOString();
  day: number = new Date().getDate();
  month: number = new Date().getMonth() +1;
  year: number = new Date().getFullYear();
  amount: number;
  methods: string[] = ["Efectivo", "Tarjeta", "Transferencia bancaria", "Bizum", "Paypal", "Otro"];


  method: string;

  isExpense: boolean = true;
  isIncome: boolean = false;
  name: string = '';
  description: string = '';

  profile: ReducedUser;
  fare: Fare;


  ngOnInit() {
    this.cargar();
  }

  cargar(): void {
    const id = this.activatedRoute.snapshot.params.id;
    // if (this.tokenService.getAuthorities().length > 1) {
      this.userService.userdataById(id).subscribe(
        data => {
          this.profile = data;
          this.cargarfare(data.fareId);
        },
        err => {
          console.log("petó");
          console.log(err);
        }
      );
  }

  cargarfare(id: string) {
    this.fareService.detalle(id).subscribe(data => {
      this.fare = data;
      this.amount = data.amount;
    }, err => {
      console.log(err);
    });
  }

  changeIncome(event) {
    if (!event) {
      this.isIncome = false;
      this.isExpense = true;
    } else {
      this.isIncome = true;
      this.isExpense = false;
    }
  }

  changeExpense(event) {
    if (event) {
      this.isIncome = false;
      this.isExpense = true;
    } else {
      this.isIncome = true;
      this.isExpense = false;
    }
  }

  onCreate() {

    if (!this.method) {
      this.presentToast('Se necesita especificar el método de pago');
    } else {

      const id = this.activatedRoute.snapshot.params.id;
      var payment = new UserPayment(null, id, this.amount, this.year, this.month, this.method);
      console.log(payment);
      this.paymentSerice.nuevo(payment).subscribe(
        data => {
          this.presentToast('Pago completado con éxito');
          this.volver(id);
        },
        err => {
          this.presentToast(err.error);
        }
      );

    }
  }


  selectChanged(selected) {
    if (selected === 'Otro') {
      this.inputCustomValue()
    } else {
      this.method = selected;
    };
  };

  async inputCustomValue() {
    const inputAlert = await this.alertController.create({
      header: 'Otro método de pago:',
      inputs: [ { type: 'text', placeholder: 'Otro método de pago' }],
      buttons: [ { text: 'Cancelar' }, { text: 'OK', handler: (data) => {console.log(data); this.method = data[0]} } ]
    });

  inputAlert.onDidDismiss(
    // (data) => {
    //   let customColorName: string = data.data.values[0];
    //   if (customColorName) {
    //     let indexFound = this.colors.findIndex(color => color === customColorName)
    //     if (indexFound === -1) {
    //       this.colors.push(customColorName);
    //       this.currentColor = customColorName;
    //     } else {
    //       this.currentColor = this.colors[indexFound];
    //     };
    //   };      
    // }
    )

    await inputAlert.present();
      
  };


  volver(id: string) {
    this.router.navigate(['/user-detail/' + id]);
  }

  changeDate(event) {
   var date = new Date(event.detail.value);
   this.day = date.getDate();
   this.month = date.getMonth() +1;
   this.year = date.getFullYear();
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
