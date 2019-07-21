const { Router } = require('express');

const taskController = require('../controllers/task');

const router = Router();

router.get('/', taskController.findAll);
router.post('/', taskController.create);

router.get('/:id', taskController.findOne);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);

module.exports = router;
