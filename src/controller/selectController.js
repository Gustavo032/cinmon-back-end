import express, { response } from "express";
import db from '../services/selectServices.js'

const router = express.Router();

router.get('/', async(request,response) => {
    try{
        const results = await db.select();
        if(results.lenght == 0){
            response.status(204).end();    
        }else{
            response.status(200).json(results)
            console.log(results)
        }        
    }catch(err){
        response.status(500).send('erro')
    }
});

export default router