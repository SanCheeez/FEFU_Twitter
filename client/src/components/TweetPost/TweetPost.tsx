import React, { useEffect, useState } from "react"
import cat from '../../img/Cat.jpg'
import { TweetPostMedia } from "../Icons/TweetPostMedia"
import { TweetPostGif } from "../Icons/TweetPostGif"
import { TweetPostQuiz } from "../Icons/TweetPostQuiz"
import { TweetPostEmoji } from "../Icons/TweetPostEmoji"
import { TweetPostTimetable } from "../Icons/TweetPostTimetable"
import axios from "axios"
import './TweetPost.scss'

const api = axios.create({
    baseURL: "http://localhost:5001/post"
})

const months = [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сен.",
    "окт.",
    "нояб.",
    "дек.",
]

export const TweetPost = (): JSX.Element => {
    const [clicked, setClicked] = useState<boolean>(false)
    const [text, setText] = useState<string>('')
    const newPost = async () => {
        setClicked(false)
        const curDate = new Date()
        const curMonth = curDate.getMonth()
        const curDay = curDate.getDate()
        const curDateStr = curDay.toString() + " " + months[curMonth]
        const response = await api.post('/', {
            text: text,
            date: curDateStr
        })
    }
    useEffect(() => {
        newPost()
    }, [])
    return (
        <div className="tweet">
            <div className="tweet__main">
                <div className="tweet__photo"><img src={cat} alt="userAvatar" /></div>
                <div className="tweet__make-post">
                    <div className="tweet__input-text"><input type="text" placeholder='Что происходит?' onChange={() => setText(document.getElementsByTagName('input')[0].value)} /></div>
                    <div className="tweet__buttons">
                        <div className="tweet__options options">
                            <div className="options__item"><TweetPostMedia /></div>
                            <div className="options__item"><TweetPostGif /></div>
                            <div className="options__item"><TweetPostQuiz /></div>
                            <div className="options__item"><TweetPostEmoji /></div>
                            <div className="options__item"><TweetPostTimetable /></div>
                        </div>
                        <button className="tweet__button" onClick={() => newPost()}>Твитнуть</button>
                    </div>
                </div>
            </div>
        </div>
    )
}