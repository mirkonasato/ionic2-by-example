import { Expense } from './expense.model';

export class ExpenseService {

  categories = ['Food', 'Travel', 'Other'];
  expenses: Expense[] = [
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

}
