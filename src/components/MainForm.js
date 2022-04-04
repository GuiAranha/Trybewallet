import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MainForm extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value-input">
          valor:
          <input data-testid="value-input" />
        </label>

        <label htmlFor="coin">
          Moeda:
          <select id="coin">
            {currencies.map((currency) => (
              <option key={ currency }>
                { currency }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Categoria:
          <select data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>

        <label htmlFor="description-input">
          Descricao:
          <input type="text" data-testid="description-input" />
        </label>
      </form>
    );
  }
}

MainForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(MainForm);
