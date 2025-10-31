import expres from 'express';

import * as clientController from '../controllers/clientcontroller.js';

const router = expres.Router();
router.get('/clients', clientController.getClients);

router.post('/clients', clientController.createclient);

router.put('/clients/:id', clientController.updateclient);

router.delete('/clients/:id', clientController.deleteclient);

router.get('/clients/search', clientController.searchclient);



export default router;