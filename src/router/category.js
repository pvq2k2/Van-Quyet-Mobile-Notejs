import { Router } from 'express';
import { create, list, read, update, remove, listAll } from '../controllers/category';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();

router.get("/categories", checkAuth, list);
// router.get("/categorys", checkAuth, listAll);
router.post('/category', checkAuth, create);
router.get('/category/:slug', checkAuth, read);
router.put('/category/:slug', checkAuth, update);
router.delete('/category/:slug', checkAuth, remove);
export default router;