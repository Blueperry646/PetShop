import {Request, Response} from 'express';
import { title } from 'process';
import {createMenuObejct} from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
    // res.render('home');
    res.render('pages/page', {
        menu: createMenuObejct('all'),
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        }
    })

};
export const cats = (req: Request, res: Response) => {
        res.render('pages/page', {
        menu: createMenuObejct('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
};
export const dogs = (req: Request, res: Response) => {
        res.render('pages/page', {
        menu: createMenuObejct('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
};
export const fishes = (req: Request, res: Response) => {
        res.render('pages/page', {
        menu: createMenuObejct('fishes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
};