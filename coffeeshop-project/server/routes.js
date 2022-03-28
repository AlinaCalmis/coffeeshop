const express = require('express');
const router = express.Router();
const requestHandler = require('./request-handler.js');


router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});


router.get('/drinks', requestHandler.getDrinks);
router.get('/drinks/:id', requestHandler.getDrink);
router.post('/drinks/:id/updateLikes', requestHandler.updateLikes);
router.post('/drinks/:id/updateDislikes', requestHandler.updateDislikes);
router.put('/drinks/:id/comments', requestHandler.addComments);
router.get('/drinks/:id/comments', requestHandler.getComments);
router.get('/drinks/sorted/:sort', requestHandler.getDrinksSorted);
router.get('/drinks/search/:search', requestHandler.getDrinksSearch);
// router.get('/desserts', requestHandler.getDesserts);
// router.get('/sandwhiches', requestHandler.getSandwhiches);

module.exports = router;