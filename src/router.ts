import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

export { router };