import express, { Request, Response, Router } from 'express';
import fs from 'fs';
import IPost from '../Interfaces/PostInterface';
import Posts from '../Models/PostModel';
import { Error } from 'mongoose';

const urlencodedParser = express.urlencoded({ extended: false });

//TODO: Написать роут для твиттов (напр. /post)
export const PostRouter: Router = express.Router();

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
PostRouter.get('/', (req: Request, res: Response) => {
    Posts.find({}, (err: Error, posts: [IPost]) => {
        if (err) {
            res.send('Не удалось найти ни одного поста');
        } else {
            res.send(posts);
        }
    })
})
//TODO: Написать запрос для получения твитта по его ID
PostRouter.get('/:id', (req: Request, res: Response) => {
    Posts.findOne({ id: req.params.id }, (err: Error, post: IPost) => {
        if (err) {
            res.send('Пост не найден');
        } else {
            res.send(post);
        }
    })
})
//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
PostRouter.post('/', urlencodedParser, (req: Request, res: Response) => {
    const newPost = new Posts({
        date: req.body.date,
        text: req.body.text,
        name: req.body.name,
    })
    newPost.save((err: unknown) => res.send(err));
})