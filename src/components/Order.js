import React,{Component} from 'react';
import s from './order.module.scss';
import { Link } from "react-router-dom"



class Order extends Component {

    componentDidUpdate(prevProps) {
        this.props.history.push('/card')
    }

    render () {
        return (
            <section className={s.order}>
                <div className={s.order__title}>
                    <h1 className={s.order__text}>Заполните платежные данные</h1>
                    <p className={s.order__info}>Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                    <Link className={s.btn} to='/card' >Перейти в профиль</Link>
                </div>
            </section>
        )
    }
}

export default Order; 