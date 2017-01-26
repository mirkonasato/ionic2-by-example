import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  categories = ['Food', 'Travel', 'Other'];
  expense;

  constructor(private navCtrl: NavController,
              private navParams: NavParams) {
    this.expense = navParams.get('expense');
  }

}
