import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Expense } from '../../app/expense.model';
import { ExpenseService } from '../../app/expense.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  categories: string[];
  expense: Expense;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private expenseService: ExpenseService) {
    this.categories = expenseService.categories;
    this.expense = navParams.get('expense');
  }

}
