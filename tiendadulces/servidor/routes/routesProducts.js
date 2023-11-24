// routesProducts.js

import Express from 'express';
import { getAllProducts, bookProduct, buyProducts, getProduct, createProduct, updateProducts, deleteProduct } from '../controllers/ProductControllers.js';
const router = Express.Router();

router.get('/', getAllProducts);
router.put('/buy', buyProducts);
router.get('/book/:id', bookProduct);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProduct);

export default router;
