import { Component } from '@angular/core';
import { Contacts } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name1 = '';
  name2 = '';

  get score() {
    const letters = (this.name1 + this.name2).toLowerCase();
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters.charCodeAt(i);
    }
    return sum % 101;
  }

  picContact1() {
    Contacts.pickContact()
      .then(contact => {
        this.name1 = contact.displayName;
      })
      .catch(error => {
        // ignore; user didn't select a contact
      });
  }

  picContact2() {
    Contacts.pickContact()
      .then(contact => {
        this.name2 = contact.displayName;
      })
      .catch(error => {
        // ignore; user didn't select a contact
      });
  }

}
