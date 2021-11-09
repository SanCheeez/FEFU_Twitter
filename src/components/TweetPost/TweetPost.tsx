import React from "react"
import cat from '../../img/Cat.jpg'
import './TweetPost.scss'
import { TweetPostMedia } from "../Icons/TweetPostMedia"
import { TweetPostGif } from "../Icons/TweetPostGif"
import { TweetPostQuiz } from "../Icons/TweetPostQuiz"
import { TweetPostEmoji } from "../Icons/TweetPostEmoji"
import { TweetPostTimetable } from "../Icons/TweetPostTimetable"

export const TweetPost = (): JSX.Element => {
    return (
        <div className="tweet">
            <div className="tweet__main">
                <div className="tweet__photo"><img src={cat} alt="userAvatar" /></div>
                <div className="tweet__make-post">
                    <div className="tweet__input-text"><input type="text" placeholder='Что происходит?' /></div>
                    <div className="tweet__buttons">
                        <div className="tweet__options options">
                            <div className="options__item"><TweetPostMedia /></div>
                            <div className="options__item"><TweetPostGif /></div>
                            <div className="options__item"><TweetPostQuiz /></div>
                            <div className="options__item"><TweetPostEmoji /></div>
                            <div className="options__item"><TweetPostTimetable /></div>
                        </div>
                        <button className="tweet__button">Твитнуть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}