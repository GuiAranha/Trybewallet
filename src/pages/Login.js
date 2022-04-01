import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAction } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
    this.validateEmailPassword = this.validateEmailPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmailPassword() {
    const { email, password } = this.state;
    const minPassword = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+/i;
    // Regex de validacao pego do Stack Overflow  https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

    if (emailRegex.test(email) && password.length >= minPassword) {
      console.log(emailRegex.test(email));
      this.setState({
        btnDisabled: false,
      });
    } else {
      this.setState({
        btnDisabled: true,
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => this.validateEmailPassword());
  }

  render() {
    const { btnDisabled, email, password } = this.state;
    const { setUser } = this.props;

    return (
      <div>
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="Email: "
            data-testid="email-input"
            onChange={ this.handleChange }
          />

          <input
            type="password"
            name="password"
            value={ password }
            placeholder="Senha: "
            data-testid="password-input"
            onChange={ this.handleChange }
          />

          <Link to="/carteira">
            <button
              type="submit"
              disabled={ btnDisabled }
              onClick={ () => { setUser(email); } }
            >
              Entrar
            </button>
          </Link>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setUser: (email) => dispatch(userAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
