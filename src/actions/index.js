// Coloque aqui suas actions
export const USER_LOGIN = 'USER_LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const userAction = (payload) => ({ type: USER_LOGIN, payload });
export const currenciesAction = (payload) => ({ type: GET_CURRENCIES, payload });
