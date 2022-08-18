import { Request, Response } from 'express'
import { pet } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenu'

export const search=(req: Request, res: Response)=>{
    let query = req.query.q as string

    let list = pet.getFromName(query)

    if(!query){
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        list,
        query,
        menu: createMenuObject('')
    })

    
}