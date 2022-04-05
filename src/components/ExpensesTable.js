import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <header>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          {expenses.map((item) => (
            <thead key={ item.id }>
              <tr>
                <td>{ item.description }</td>
                <td>{ item.tag }</td>
                <td>{ item.method }</td>
                <td>{ parseFloat(item.value).toFixed(2) }</td>
                <td>{ item.exchangeRates[item.currency].name }</td>
                <td>{ parseFloat(item.exchangeRates[item.currency].ask).toFixed(2) }</td>
                <td>
                  { (item.value * parseFloat(item.exchangeRates[item.currency]
                    .ask)).toFixed(2) }
                </td>
                <td>Real</td>
                <td>Editar/Excluir</td>
              </tr>
            </thead>
          ))}
        </table>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

/* ExpensesTable.defaultProps = {
  expenses: {
    total: 0,
    ask: 0,
  },
}; */

export default connect(mapStateToProps, null)(ExpensesTable);
