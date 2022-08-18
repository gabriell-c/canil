import { Request, Response } from 'express'
import { listenerCount } from 'process'
import { createMenuObject } from '../helpers/createMenu'
import { pet } from '../models/Pet'

export const home=(req: Request, res: Response)=>{

    let list = pet.getAll()
    
    res.render('pages/page', {
        list,
        menu: createMenuObject('all'),
        banner: {
            titulo: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    })
}

export const dogs=(req: Request, res: Response)=>{
    let list = pet.getFromType('dog')
    res.render('pages/page', {
        list,
        menu: createMenuObject('dog'),
        banner: {
            titulo: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    })
}

export const cats=(req: Request, res: Response)=>{
    let list = pet.getFromType('cat')
    res.render('pages/page', {
        list,
        menu: createMenuObject('cat'),
        banner: {
            titulo: 'Gatos',
            background: 'banner_cat.jpg'
        }
    })
}

export const fishes=(req: Request, res: Response)=>{
    let list = pet.getFromType('fish')
    res.render('pages/page', {
        list,
        menu: createMenuObject('fish'),
        banner: {
            titulo: 'Peixes',
            background: 'banner_fish.jpg'
        }
    })
}