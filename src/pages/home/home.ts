import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseService } from '../../app/expense.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses;

  constructor(private navCtrl: NavController,
              private expenseService: ExpenseService) {
    this.expenses = expenseService.expenses;
  }

  onItemClick(expense) {
    console.log('item clicked:', expense);
    this.navCtrl.push(DetailPage, {
      expense: expense
    });
  }

}
