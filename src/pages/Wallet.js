import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { currenciesAction } from '../actions';
import getCurrencies from '../services/api';

class Wallet extends React.Component {
  componentDidMount() {
    const { setCurrency } = this.props;
    getCurrencies().then((itens) => {
      setCurrency(itens);
    });
  }

  render() {
    return <div><Header /></div>;
  }
}

Wallet.propTypes = {
  setCurrency: propTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCurrency: (currencies) => dispatch(currenciesAction(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
