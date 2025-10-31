import expres from 'express';

import * as clientController from '../controllers/clientcontroller.js';

const router = expres.Router();
router.get('/clients', clientController.getClients);

router.post('/clients', clientController.createclient);

export default router;