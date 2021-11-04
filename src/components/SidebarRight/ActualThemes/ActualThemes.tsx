import React from "react"
import './ActualThemes.scss'
import { DotsMore } from "../../Icons/DotsMore";
import { Settings } from "../../Icons/Settings";

export const ActualThemes = (): JSX.Element => {
    return (
        <div className="actual">
            <div className="actual__title title">
                <div className="title__text">Актуальные темы для вас</div>
                <div className="title__settings"><Settings /></div>
            </div>
            <div className="actual__themes">
                <div className="item">
                    <div className="item__content content">
                        <div className="content__title">Актуальные темы: Россия</div>
                        <div className="content__name">#локдаун</div>
                    </div>
                    <div className="item__dots"><DotsMore /></div>
                </div>
                <div className="item">
                    <div className="item__content content">
                        <div className="content__title">Актуальные темы: Россия</div>
                        <div className="content__name">Meta</div>
                    </div>
                    <div className="item__dots"><DotsMore /></div>
                </div>
                <div className="item">
                    <div className="item__content content">
                        <div className="content__title">Актуальные темы: Россия</div>
                        <div className="content__name">Рашкина</div>
                    </div>
                    <div className="item__dots"><DotsMore /></div>
                </div>
                <div className="item_more">Показать ещё</div>
            </div>
        </div>
    );
}
