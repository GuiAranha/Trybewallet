import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  /* constructor() {
    super();
    this.expensesValue = this.expensesValue.bind(this);
  } */

  /* expensesValue() {
    const { allExpenses } = this.props;
    return allExpenses.reduce((total, current) => total + current, 0);
  } */

  render() {
    const { email, allExpenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ allExpenses.total.toFixed(2) }</p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  allExpenses: state.wallet.expensesTotal,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  allExpenses: PropTypes.shape({
    total: PropTypes.number.isRequired,
  }),
};

Header.defaultProps = {
  allExpenses: {
    total: 0,
    ask: 0,
  },
};

export default connect(mapStateToProps, null)(Header);
