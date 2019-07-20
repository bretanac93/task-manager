const express = require('express');
const { exampleController } = require('../controllers');

const router = express.Router();

/**
 * @api {get} / Test Endpoint
 * @apiVersion 1.0.0
 * @apiName TestEndpoint
 * @apiGroup Test
 *
 * @apiSuccess {Boolean} success Status of the response.
 * @apiSuccess {String} message  Message of information.
 */
router.get('/', exampleController.getAll);

module.exports = router;
