const { Router } = require('express');

const columnController = require('../controllers/column');

const router = Router();

router.get('/', columnController.findAll);
router.post('/', columnController.create);

router.get('/:id', columnController.findOne);
router.put('/:id', columnController.update);
router.delete('/:id', columnController.remove);

module.exports = router;
