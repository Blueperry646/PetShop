import {Request, Response} from 'express';
import { title } from 'process';
import {createMenuObejct} from '../helpers/createMenuObject'
import { Pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
    // res.render('home');
    let list = Pet.getAll()
    res.render('pages/page', {
        menu: createMenuObejct('all'),
        banner: {
            title: 'todos os animais',
            background: 'allanimals.jpg'
        },
        list
    })

};
export const cats = (req: Request, res: Response) => {
        let list = Pet.getFromType('cat')
        res.render('pages/page', {
        menu: createMenuObejct('cats'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    })
};
export const dogs = (req: Request, res: Response) => {
        let list = Pet.getFromType('dog')
        res.render('pages/page', {
        menu: createMenuObejct('dogs'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    })
};
export const fishes = (req: Request, res: Response) => {
        let list = Pet.getFromType('fish')
        res.render('pages/page', {
        menu: createMenuObejct('fishes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    })
};