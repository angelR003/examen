import { Router } from 'express';
import { getAll, getxNum, insert, update, remove } from '../controllers/gym.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:numCliente', getxNum);
router.post('/', insert);
router.post('/:numCliente', update);
router.post('borrarCliente/:numCliente', remove);

export default router;