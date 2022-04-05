// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, TOTAL_EXPENSES, NEW_EXPENSE } from '../actions';

const INITIAL_STATE = {
  id: 0,
  expenses: [],
  expensesTotal: {
    total: 0,
    ask: 0,
  },
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return { ...state,
      currencies: action.payload,
    };
  case TOTAL_EXPENSES:
    return { ...state,
      expensesTotal: {
        total: (state.expensesTotal.total + action.payload.total),
        ask: action.payload.ask },
    };
  case NEW_EXPENSE:
    return { ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
