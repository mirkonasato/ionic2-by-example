import { Expense } from './expense.model';

export class ExpenseService {

  static nextId = 4;

  categories = ['Food', 'Travel', 'Other'];
  expenses: Expense[] = [
    {
      id: 1,
      date: '2016-01-01',
      amount: 7.25,
      category: 'Food',
      description: 'Lunch'
    },
    {
      id: 2,
      date: '2016-01-02',
      amount: 18.90,
      category: 'Travel',
      description: 'Train ticket'
    },
    {
      id: 3,
      date: '2016-01-02',
      amount: 9.00,
      category: 'Food',
      description: 'Dinner'
    }
  ];

  addExpense(expense: Expense) {
    expense.id = ExpenseService.nextId++;
    this.expenses.push(expense);
  }

  getExpense(expenseId: number) {
    const expense = this.expenses.find(it => it.id === expenseId);
    return Object.assign({}, expense);
  }

  removeExpense(expenseId: number) {
    const index = this.expenses.findIndex(it => it.id === expenseId);
    this.expenses.splice(index, 1);
  }

  updateExpense(expense: Expense) {
    const index = this.expenses.findIndex(it => it.id === expense.id);
    this.expenses[index] = expense;
  }

}
