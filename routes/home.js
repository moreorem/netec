import { Router } from 'express';
import MainController from '../controllers/main.js';

const router = new Router();

router.get('/', MainController.home);

export { router };
