import {Request, Response} from 'express';
import { title } from 'process';

export const home = (req: Request, res: Response) => {
    // res.render('home');
    res.render('pages/page', {
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        }
    })

};
export const cats = (req: Request, res: Response) => {
    res.render('cats');
};
export const dogs = (req: Request, res: Response) => {
    res.render('dogs');
};
export const fishes = (req: Request, res: Response) => {
    res.render('fishes');
};