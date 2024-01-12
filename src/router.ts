import { Router } from 'express';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';

router.post('/user', new CreateUserController().handle);

export { router };