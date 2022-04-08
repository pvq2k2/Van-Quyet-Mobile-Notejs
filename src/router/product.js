import { Router } from 'express';
import { create, get, list, remove, update, getViaSlug } from '../controllers/product';
import { userById } from '../controllers/user';
import { checkAuth, isAdmin, isAuth, requireSignin } from '../middleware/checkAuth';

// const { Router } = require('express');
// const { checkAuth } = require('../middleware/checkAuth');

const router = Router();

router.get('/products', list);
router.get('/product/:slug', getViaSlug);
router.get('/products/:id', get);
router.post('/product/:userId', requireSignin, isAuth, isAdmin, create);
// router.post('/product', create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);

router.param("userId", userById)



export default router;