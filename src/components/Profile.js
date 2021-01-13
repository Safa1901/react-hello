import React,{Component} from 'react'
import s from './profile.module.scss'

class Form extends Component{
    render() {
        return(
        <section className={s.profiler}>
        <h1 className={s.title}>Профиль</h1>
        <div className={s.payment__details}>Ввдеите платежные данные</div>
        <form className={s.profiler__form}>
        <label className={s.payment__info}>
        <p className={s.payment__title}>Имя владельца</p>
        <input className={s.payment__block} type="text"/>
        </label>
        <label className={s.payment__info}>
        <p className={s.payment__title}>Номер карты</p>
        <input className={s.payment__block} type="text"/>
        </label>
        <div className={s.block__down}>
        <label className={s.payment__date}>
        <p className={s.payment__title}>MM/YY</p>
        <input className={s.payment__blockf} type="text"/>
        </label>
        <label className={s.payment__date}>
        <p className={s.payment__title}>CVC</p>
        <input className={s.payment__blockf} type="text"/>
        </label>
        </div>
        <button className={s.btn}>Войти</button>
        </form>
        </section>)
    }
}

export default new Form();

