const router = require('express').Router();

const {AddUser,Login} = require('../controllers/usersControllers');
const {AddFavoriteItem,FavoriesList,RemoveFilm} = require('../controllers/favoritesControlers')

router.post('/addRegister', AddUser);

router.post('/login',Login)

router.post('/addfavs',AddFavoriteItem)

router.get('/list/:mail',FavoriesList)

router.delete('/removeFav/:id', RemoveFilm);

module.exports = router;