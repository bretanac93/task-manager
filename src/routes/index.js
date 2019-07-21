const { Router } = require('express');

const tasksRouter = require('./task');
const columnsRouter = require('./column');

const router = Router();

router.use('/tasks', tasksRouter);
router.use('/columns', columnsRouter);

module.exports = router;
