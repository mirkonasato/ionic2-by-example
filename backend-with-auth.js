const express = require('express');
const unless = require('express-unless');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const bodyParser = require('body-parser');
const ExpenseService = require('./expense-service');

const PORT = 9999;
const DB_PATH = './expenses.db';
const JWT_SECRET = 'bBWYqeeL+FTM45tvwwTXcDtj/nk8G27e';

const app = express();
const expenseService = new ExpenseService(DB_PATH);

app.use(bodyParser.json());
app.use(expressJwt({secret: JWT_SECRET}).unless({path: ['/token']}));
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.header("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Origin, X-Requested-With");
  next();
});

app.post('/token', (request, response) => {
  const user = expenseService.getUser(request.body.username);
  if (user && user.password === request.body.password) {
    response.json({
      token: jwt.sign({sub: user.id}, JWT_SECRET)
    });
  } else {
    response.sendStatus(401);
  }
});

app.get('/expenses', (request, response) => {
  const expenses = expenseService.getExpenses(request.user.sub);
  response.json(expenses);
});

app.get('/expenses/:id', (request, response) => {
  const id = request.params.id;
  const expense = expenseService.getExpense(request.user.sub, id);
  response.json(expense);
});

app.post('/expenses', (request, response) => {
  expenseService.createExpense(request.user.sub, request.body);
  response.status(201).send();
});

app.put('/expenses/:id', (request, response) => {
  const id = request.params.id;
  if (id !== request.body.id) {
    response.status(400).send('the id in the URL path does not match the id in the request body');
  }
  expenseService.updateExpense(request.user.sub, request.body);
  response.status(204).send();
});

app.delete('/expenses/:id', (request, response) => {
  const id = request.params.id;
  expenseService.deleteExpense(request.user.sub, id);
  response.status(204).send();
});

app.listen(PORT, () => {
  console.info(`app started on port ${PORT}`);
});
