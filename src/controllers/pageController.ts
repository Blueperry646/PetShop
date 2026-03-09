import {Request, Response} from 'express';

export const home = (req: Request, res: Response) => {
    res.render('home');
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