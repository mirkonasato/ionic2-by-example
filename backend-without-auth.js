const express = require('express');
const bodyParser = require('body-parser');
const ExpenseService = require('./expense-service');

const PORT = 9999;
const DB_PATH = './expenses.db';
const USER_ID = 0;  // always use the 'anonymous' user to avoid authentication

const app = express();
const expenseService = new ExpenseService(DB_PATH);

app.use(bodyParser.json());
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Origin, X-Requested-With");
  next();
});

app.get('/expenses', (request, response) => {
  const expenses = expenseService.getExpenses(USER_ID);
  response.json(expenses);
});

app.get('/expenses/:id', (request, response) => {
  const id = request.params.id;
  const expense = expenseService.getExpense(USER_ID, id);
  response.json(expense);
});

app.post('/expenses', (request, response) => {
  expenseService.createExpense(USER_ID, request.body);
  response.status(201).send();
});

app.put('/expenses/:id', (request, response) => {
  const id = request.params.id;
  if (id !== request.body.id) {
    response.status(400).send('the id in the URL path does not match the id in the request body');
  }
  expenseService.updateExpense(USER_ID, request.body);
  response.status(204).send();
});

app.delete('/expenses/:id', (request, response) => {
  const id = request.params.id;
  expenseService.deleteExpense(USER_ID, id);
  response.status(204).send();
});

app.listen(PORT, () => {
  console.info(`app started on port ${PORT}`);
});
