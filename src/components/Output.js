import React from 'react'
import { withAuth } from './AuthContext';
import s from './output.module.scss'
import Profile from './Profile';

function Output() {
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
        <button className={s.btn}>Войти</button>
        <div className={s.title__users} >Новый пользователь? Регистрация</div>
        </form>
        </section>
    )
}

export default Output;