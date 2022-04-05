import React from 'react';
import { connect } from 'react-redux';
/* import PropTypes from 'prop-types'; */

class ExpensesTable extends React.Component {
  render() {
    /* const { } = this.props; */
    return (
      <header>
        <table>
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
        </table>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps, null)(ExpensesTable);
