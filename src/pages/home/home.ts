import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses = [
    {
      date: '2016-01-01',
      amount: 7.25,
      category: 'Food',
      description: 'Lunch'
    },
    {
      date: '2016-01-02',
      amount: 18.90,
      category: 'Travel',
      description: 'Train ticket'
    },
    {
      date: '2016-01-02',
      amount: 9.00,
      category: 'Food',
      description: 'Dinner'
    }
  ];

  constructor(private navCtrl: NavController) { }

}
