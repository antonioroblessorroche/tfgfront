import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Expense } from 'src/app/models/expense';
import { ExpenseSummary } from 'src/app/models/ExpensesSummary';
import { Fare } from 'src/app/models/fare';
import { ReducedUser } from 'src/app/models/reducedUser';
import { ExpenseService } from 'src/app/services/expenses.service';
import { FareService } from 'src/app/services/fare.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.page.html',
  styleUrls: ['./expenses-list.page.scss'],
})
export class ExpensesListPage implements OnInit {

// @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

profile: ReducedUser;
fares: Fare[] = [];

expenses: Expense[] = [];
incomes: Expense[] = [];
summary: ExpenseSummary;
balance: number  =0;
totalIncomes: number = 0;
totalExpenses: number = 0;
hasData: boolean = false;


//MOCKED DATA



user : string = "";
page: 0;

selector = "profile";
selectedYear: number = 0;
selectedMonth: number;

constructor(
  private expenseService: ExpenseService,
  private fareService: FareService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
  private toastController: ToastController,
  private alertController: AlertController,
  private tokenService: TokenService,
  private modalController: ModalController
) { }

ngOnInit() {
  console.log(this.incomes);
  console.log(this.incomes);
}

ionViewWillEnter() {
  // this.cargar();
  // this.cargarFares();
}

// cargarFares() {
//   this.fareService.lista(100).subscribe(data => {
//     this.fares = data.content;
//   }, err => {
//     console.log(err);
//     this.presentToast('Error cargando tarifas');
//   });
// }

// selectFareId(event) {
//   this.profile.fareId = event.value.id;
//  }

segmentChanged($event) {
  this.selector = $event.detail.value;
  console.log($event.detail.value);
}

selectYear(event) {
  this.selectedYear = event.detail.value.substring(0,4);
}

selectMonth(event) {
  this.selectedMonth = event.detail.value.substring(5,7);
}

buscar() {
  this.totalExpenses = 0;
  this.totalIncomes = 0;
  this.balance = 0;
  this.hasData = false;
  if (this.selectedYear == 0) {
    this.selectedYear = new Date().getFullYear();
  } else {
    if (this.selectedMonth == 0) {
      this.selectedMonth = new Date().getMonth() +1;
    }
  }

  if (this.selectedMonth == null || this.selectMonth == undefined) {
      this.expenseService.gastosPorAnno(100, this.selectedYear).subscribe(
        data => {
          this.expenses = data.content;
          if (this.expenses.length > 0) {
            for (let i=0; i< this.expenses.length; i++) {
              this.totalExpenses+=this.expenses[i].amount;
            }
            this.balance-=this.totalExpenses;
            this.hasData = true;
          }
        }
      );
      this.expenseService.ingresosPorAnno(100, this.selectedYear).subscribe(
        data => {
          this.incomes = data.content;
          if (this.incomes.length > 0) {
            for (let i=0; i< this.incomes.length; i++) {
              this.totalIncomes+=this.incomes[i].amount;
            }
            this.balance+=this.totalIncomes;
            this.hasData = true;
          }
        }
      );
      this.expenseService.expensesPerYear(this.selectedYear).subscribe(
        data => {
          this.summary = data;
          this.balance+=parseFloat(this.summary.totalPaidUsers);
        }
      );
  } else {
    this.expenseService.gastosPorAnnoYMes(100, this.selectedYear, this.selectedMonth).subscribe(
      data => {
        this.expenses = data.content;
        if (this.expenses.length > 0) {
          for (let i=0; i< this.expenses.length; i++) {
            this.totalExpenses+=this.expenses[i].amount;
          }
          this.balance-=this.totalExpenses;
          this.hasData = true;

        }
      }
    );
    this.expenseService.ingresosPorAnnoYMes(100, this.selectedYear, this.selectedMonth).subscribe(
      data => {
        this.incomes = data.content;
        if (this.incomes.length > 0) {
          for (let i=0; i< this.incomes.length; i++) {
            this.totalIncomes+=this.incomes[i].amount;
          }
          this.balance+=this.totalIncomes;
          this.hasData = true;
        }
      }
    );
    this.expenseService.expensesPerYearAndMonth(this.selectedYear, this.selectedMonth).subscribe(
      data => {
        this.summary = data;
        this.balance+=parseFloat(this.summary.totalPaidUsers);
      }
    );
  }
  // this.balance = this.totalIncomes - this.totalExpenses;

}



// cargar(): void {
//   const id = this.activatedRoute.snapshot.params.id;
//   // if (this.tokenService.getAuthorities().length > 1) {
//     this.expenseService.(id).subscribe(
//       data => {
//         this.profile = data;
//       },
//       err => {
//         console.log("petó");
//         console.log(err);
//       }
//     );

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

// }


// async presentToast(mensaje: string) {
//   const toast = await this.toastController.create({
//     message: mensaje,
//     duration: 2000,
//     position: 'middle'
//   });
//   toast.present();
// }




}
