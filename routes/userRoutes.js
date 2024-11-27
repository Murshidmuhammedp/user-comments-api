import express from 'express';
import { Userregister } from '../controller/userController.js';
import { comment, getComment } from '../controller/commentController.js';

const router = express.Router();

router.post('/', Userregister);

// comment
router.post('/comment/:id', comment)
router.get('/comment/:id', getComment)

export default router;