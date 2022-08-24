import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expenses.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})
export class NewExpensePage implements OnInit {

  constructor(
    private service: ExpenseService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private alertController: AlertController,
    private tokenService: TokenService) { }

  date: string = (new Date()).toISOString();
  day: number = new Date().getDate();
  month: number = new Date().getMonth() +1;
  year: number = new Date().getFullYear();
  amount: number = 0;

  isExpense: boolean = true;
  isIncome: boolean = false;
  name: string = '';
  description: string = '';


  ngOnInit() {

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
    var expense = new Expense(null, this.name, this.amount, this.description, this.year, this.month, this.day, this.isIncome);
    expense.submittedBy = this.tokenService.getUsername();
    this.service.nuevo(expense).subscribe(
      data => {
        console.log("Created: " + data)
      }
    );
  }

  changeDate(event) {
   var date = new Date(event.detail.value);
   this.day = date.getDate();
   this.month = date.getMonth() +1;
   this.year = date.getFullYear();
  }


}
