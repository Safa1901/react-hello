import React from 'react';
import {connect} from 'react-redux';
import {logIn} from './actions';
import s from './output.module.scss'

class Output extends React.Component {
    onLoginPressed = () => {
        this.props.LogIn('valid@email.com', 'correctpassword');
    }
    render() {
        return (
            <section className={s.exit}>

            <form className={s.formout}>
            <h1 className={s.title}>Войти</h1>
            <label className={s.info__form} htmlFor="email"><p className={s.title__email}>Email*</p>
            <input className={s.form__block}  id="email" type="email" name="email" size="28" placeholder="mail@mail.ru"/>
            </label>
            <label className={s.info__form} htmlFor="password"><p className={s.title__email}>Пароль</p>
            <input className={s.form__block} id="password" type="password" name="password" size="28" placeholder="********"/> 
            </label>
            <button className={s.btn} onClick={this.onLoginPressed}>Войти</button>
            <div className={s.title__users} >Новый пользователь? Регистрация</div>
            </form>
            </section>
        )
    }
}




export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { logIn }
)(Output);