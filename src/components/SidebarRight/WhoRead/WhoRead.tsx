import React from "react"
import './WhoRead.scss'
import StopGame from '../../../img/stopgame_logo.jpg'
import JoeRogan from '../../../img/joe_rogan_logo.jpeg'
import NASA from '../../../img/NASA_logo.jpg'

export const WhoRead = (): JSX.Element => {
    return (
        <div className="who-read">
            <div className="who-read__title">
                Кого читать
            </div>
            <div className="who-read__users">
                <div className="item">
                    <div className="item__user">
                        <div className="item__user_avatar">
                            <img src={StopGame} alt="" />
                        </div>
                        <div className="item__user_names">
                            <div className="user_name">StopGame.ru</div>
                            <div className="user_nick">@stopgameru</div>
                        </div>
                    </div>
                    <button className="item__button">Читать</button>
                </div>
                <div className="item">
                    <div className="item__user">
                        <div className="item__user_avatar">
                            <img src={JoeRogan} alt="" />
                        </div>
                        <div className="item__user_names">
                            <div className="user_name">Joe Rogan</div>
                            <div className="user_nick">@joerogan</div>
                        </div>
                    </div>
                    <button className="item__button">Читать</button>
                </div>
                <div className="item">
                    <div className="item__user">
                        <div className="item__user_avatar">
                            <img src={NASA} alt="" />
                        </div>
                        <div className="item__user_names">
                            <div className="user_name">NASA</div>
                            <div className="user_nick">@NASA</div>
                        </div>
                    </div>
                    <button className="item__button">Читать</button>
                </div>
                <div className="item_more">Показать ещё</div>
            </div>
        </div>
    );
}