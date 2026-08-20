const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

/*
 * Generated Endpoints
 * This single line automatically generates the following 5 API endpoints:
 * ------
 * HTTP Verb | URI | Action | Route | Name
 * GET /api/books index books.index
 * POST /api/books store books.store
 * GET /api/books/{book} show books.show
 * PUT /PATCH/api/books/{book} update books.update
 * DELETE /api/books/{book} destroy books.destroy
 * ------->
 */

router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:id', userController.show);
router.put('/', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;