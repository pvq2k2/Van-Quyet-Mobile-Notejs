import { Router } from 'express';
import { create, get, list, remove, update } from '../controllers/slider';

// const { Router } = require('express');
// const { checkAuth } = require('../middleware/checkAuth');

const router = Router();

router.get('/sliders', list);
router.get('/slider/:id', get);
router.post('/slider', create);
router.delete("/slider/:id", remove);
router.put("/slider/:id", update);

export default router;