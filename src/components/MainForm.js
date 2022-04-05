import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { expensesAction, totalExpensesAction } from '../actions';
import { getAllCurrencies } from '../services/api';

class MainForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
      exchangeRates: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  submit = async () => {
    const { dispatch } = this.props;
    const data = await getAllCurrencies();
    const allExpenses = { ...this.state, exchangeRates: data };
    dispatch(expensesAction(allExpenses));
    const price = allExpenses.exchangeRates[allExpenses.currency].ask;
    const expensePrice = allExpenses.value * price;
    dispatch(totalExpensesAction({ total: expensePrice, ask: price }));
    this.setState((prevState) => ({ id: prevState.id + 1, value: 0 }));
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, currency, method, tag, description } = this.state;
    return (
      <form>
        <label htmlFor="value">
          valor:
          <input
            type="text"
            id="value"
            name="value"
            value={ value }
            data-testid="value-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            value={ currency }
            data-testid="currency-input"
            onChange={ this.handleChange }
          >
            {currencies.map((coin) => (
              <option key={ coin }>
                { coin }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            value={ method }
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag">
          Categoria:
          <select
            id="tag"
            name="tag"
            value={ tag }
            data-testid="tag-input"
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description">
          Descricao:
          <input
            type="text"
            id="description"
            name="description"
            value={ description }
            data-testid="description-input"
            onChange={ this.handleChange }
          />
        </label>

        <button type="button" onClick={ this.submit }>Adicionar despesa</button>
      </form>
    );
  }
}

MainForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(MainForm);
