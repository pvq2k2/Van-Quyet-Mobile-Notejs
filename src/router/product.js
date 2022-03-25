import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/product';
import { checkAuth, requireSignin } from '../middleware/checkAuth';

// const { Router } = require('express');
// const { checkAuth } = require('../middleware/checkAuth');

const router = Router();

router.get('/products', list);
router.get('/product/:id', get);
router.post('/product', requireSignin, checkAuth, create);
router.delete("/product/:id", remove);
router.put("/product/:id", update);

export default router;