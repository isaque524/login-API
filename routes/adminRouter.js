const express = require('express');
const router = express.Router();

const auth = require('../controllers/authController')

router.get('/', auth, (req, res) =>{

    if (req.user.admin){
        res.send('Esse dado só pode ser visto pelo Admin')
    }
    else{
        res.status(401).send('Not Admin: Acess Denied');
    }
    })

    router.get('/free',auth, (req,res) =>{
        res.send('Essa rota é para aqueles que tão logados')
    } )


module.exports = router;