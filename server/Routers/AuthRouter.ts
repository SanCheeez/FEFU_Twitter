import { Request, Response, Router } from "express"
import { check, validationResult } from 'express-validator'
import Users from "../Models/UserModel"
const config = require('../config/default.json')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

export const AuthRouter: Router = Router();

AuthRouter.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const { name, email, password } = req.body;

            const candidate = await Users.findOne({ email });

            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже существует' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new Users({
                name: name,
                email: email,
                password: hashedPassword
            })

            newUser.save((err) => {
                if (err) {
                    return res.status(400).json(err.message);
                }
                return res.status(201).json({ message: 'Пользователь создан' });
            })
        } catch (e) {
            res.status(500).json({ message: e });
        }
    })

AuthRouter.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему'
                })
            }

            const { email, password } = req.body

            const user = await Users.findOne({ email })

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль' })
            }

            const token = jwt.sign(
                { userId: user._id },
                "dog can dance",
                { expiresIn: '1h' }
            )

            res.status(200).json({
                token: token,
                name: user.name,
                email: user.email
            })
        } catch (err: any) {
            res.status(500).json(err.message)
        }
    })