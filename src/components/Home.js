import React from 'react';
import {connect} from 'react-redux';
import {authenticate} from './actions';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from './output.module.scss'

export class Home extends React.Component {
    authenticate = (event) => {
        this.props.authenticate('valid@gmail.com', 'validpassword');
    };
    
    render() {
        return (
            <section className={s.exit}>
                {this.props.isLoggedIn ? (
                    <p className={s.title__users}>
                        You are logged in. <Link to="/profile">Go to profile</Link>
                    </p>
                ) : (
                    <div className={s.formout}>
                    <h1 className={s.title}>Войти</h1>
                    <label className={s.info__form} htmlFor="email"><p className={s.title__email}>Email*</p>
                    <input className={s.form__block}  id="email" type="email" name="email" size="28" placeholder="mail@mail.ru"/>
                    </label>
                    <label className={s.info__form} htmlFor="password"><p className={s.title__email}>Пароль</p>
                    <input className={s.form__block} id="password" type="password" name="password" size="28" placeholder="********"/> 
                    </label>
                    <button className={s.btn} onClick={this.authenticate}>Войти</button>
                    </div>
                )}
            </section>
        );
    }
}


Home.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
};




export const HomeWithConnect = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(Home);