const express = require ('express');

const router = express.Router();

router.get('/filter', (req, res) => {
    res.send('I am a filter');
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    res.json({
        id,
        name: 'pagada',
        price: 100
    })
});

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    })
});

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'updated',
        data: body,
        id
    })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'deleted',
        id
    })
});

module.exports = router; 