// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const NEW_EXPENSE = 'NEW_EXPENSE';
export const TOTAL_EXPENSES = 'TOTAL_EXPENSE';

export const userAction = (payload) => ({ type: USER_LOGIN, payload });

export const currenciesAction = (payload) => ({ type: GET_CURRENCIES, payload });

export const expensesAction = (payload) => ({ type: NEW_EXPENSE, payload });

export const totalExpensesAction = (payload) => ({ type: TOTAL_EXPENSES, payload });
