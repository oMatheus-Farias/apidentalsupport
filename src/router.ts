import { Router } from 'express';
import multer from 'multer';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { UpdateUserAvatarController } from './controllers/user/UpdateUserAvatarController';

import { CreateClinicController } from './controllers/clinic/CreateClinicController';
import { AuthClinicController } from './controllers/clinic/AuthClinicController';

import { isAuthenticatedUser } from './middleware/isAuthenticatedUser';

import uploadConfig from './config/multer';

const upload = multer(uploadConfig.upload('./tmp'));

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticatedUser, new DetailUserController().handle);
router.put('/user', isAuthenticatedUser, new UpdateUserController().handle);
router.put('/avatar', isAuthenticatedUser, upload.single('file'), new UpdateUserAvatarController().handle);

router.post('/clinic', new CreateClinicController().handle);
router.post('/session/clinic', new AuthClinicController().handle);

export { router };