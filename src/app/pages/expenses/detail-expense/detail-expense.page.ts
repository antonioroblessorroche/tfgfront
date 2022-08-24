import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expenses.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-detail-expense',
  templateUrl: './detail-expense.page.html',
  styleUrls: ['./detail-expense.page.scss'],
})
export class DetailExpensePage implements OnInit {

 
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
  submittedUser: string = '';
  canEdit: boolean = false;

  isExpense: boolean = true;
  isIncome: boolean = false;
  name: string = '';
  description: string = '';

  ngOnInit() {
    this.cargar();
  }

  cargar() {
    const id = this.activatedRoute.snapshot.params.id;
    this.submittedUser = this.tokenService.getUsername();
    this.service.detalle(id).subscribe(
      data => {
        this.day = data.day;
        this.month = data.month;
        this.year = data.year;
        this.amount = data.amount;
        this.name = data.name;
        this.description = data.description;
        this.isExpense = !data.income;
        this.isIncome = data.income
        this.canEdit = data.submittedBy == this.submittedUser;
        this.date = new Date(this.year, this.month - 1, this.day).toISOString();
      }
    );
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
    const id = this.activatedRoute.snapshot.params.id;
    var expense = new Expense(id, this.name, this.amount, this.description, this.year, this.month, this.day, this.isIncome);
    expense.submittedBy = this.submittedUser;
    this.service.actualizar(id, expense).subscribe(
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
