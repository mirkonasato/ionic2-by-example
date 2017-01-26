import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Expense } from '../../app/expense.model';
import { ExpenseService } from '../../app/expense.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  categories: string[];
  expense: Expense;

  constructor(private alertCtrl: AlertController,
              private navCtrl: NavController,
              private navParams: NavParams,
              private expenseService: ExpenseService) {
    this.categories = expenseService.categories;
    const expenseId = navParams.get('expenseId');
    if (expenseId) {
      this.expense = expenseService.getExpense(expenseId);
    } else {
      this.expense = {
        date: '',
        amount: 0,
        category: '',
        description: ''
      };
    }
  }

  onSave() {
    if (this.expense.id) {
      this.expenseService.updateExpense(this.expense);
    } else {
      this.expenseService.addExpense(this.expense);
    }
    this.navCtrl.pop();
  }

  onTrash() {
    let confirm = this.alertCtrl.create({
      title: 'Delete',
      message: `Are you sure you want to delete this expense: "${this.expense.description}"?`,
      buttons: [
        { text: 'Cancel', },
        {
          text: 'Confirm',
          handler: () => {
            this.expenseService.removeExpense(this.expense.id);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
