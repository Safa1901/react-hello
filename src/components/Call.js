import React, { Component } from "react"

class Call extends Component {
    render() {
        return (
            <section>
                <div>
                    <label htmlFor="called">
                        <input type="text" placeholder="Откуда">
                        </input>
                    </label>
                    <label htmlFor="called">
                        <input type="text" placeholder="Куда">
                        </input>
                    </label>
                    <button className={s.btn}>Заказать</button>
                </div>
            </section>
        )
    }
}

export default Call;