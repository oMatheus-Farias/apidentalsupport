import { Router } from 'express';
import multer from 'multer';

const router = Router();

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { UpdateUserAvatarController } from './controllers/user/UpdateUserAvatarController';
import { ListClinicController } from './controllers/user/ListClinicController';
import { ListProductsClinicController } from './controllers/user/ListProductsClinicController';
import { DetailClinicUniqueController } from './controllers/user/DetailClinicUniqueController';
import { ListServicesController } from './controllers/user/ListServicesController';
import { DeleteServiceController } from './controllers/user/DeleteServiceController';

import { CreateClinicController } from './controllers/clinic/CreateClinicController';
import { AuthClinicController } from './controllers/clinic/AuthClinicController';
import { DetailClinicController } from './controllers/clinic/DetailClinicController';
import { UpdateClinicController } from './controllers/clinic/UpdateClinicController';
import { UpdateClinicBannerController } from './controllers/clinic/UpdateClinicBannerController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductsController } from './controllers/product/ListProductsController';
import { UpdateProductController } from './controllers/product/UpdateProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { DetailProductUniqueController } from './controllers/product/DetailProductUniqueController';

import { CreateServiceController } from './controllers/service/CreateServiceController';

import { isAuthenticatedUser } from './middleware/isAuthenticatedUser';
import { isAuthenticatedClinic } from './middleware/isAuthenticatedClinic';

import uploadConfig from './config/multer';

const upload = multer(uploadConfig.upload('./tmp'));

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticatedUser, new DetailUserController().handle);
router.put('/user', isAuthenticatedUser, new UpdateUserController().handle);
router.put('/avatar', isAuthenticatedUser, upload.single('file'), new UpdateUserAvatarController().handle);
router.get('/clinics', isAuthenticatedUser, new ListClinicController().handle);
router.get('/products/clinic', isAuthenticatedUser, new ListProductsClinicController().handle);
router.get('/clinic/unique', isAuthenticatedUser, new DetailClinicUniqueController().handle);
router.get('/services', isAuthenticatedUser, new ListServicesController().handle);
router.delete('/user/deleteservice', isAuthenticatedUser, new DeleteServiceController().handle);

router.post('/clinic', new CreateClinicController().handle);
router.post('/session/clinic', new AuthClinicController().handle);
router.get('/me/clinic', isAuthenticatedClinic, new DetailClinicController().handle);
router.put('/clinic', isAuthenticatedClinic, new UpdateClinicController().handle);
router.put('/banner', isAuthenticatedClinic, upload.single('file'), new UpdateClinicBannerController().handle);

router.post('/product', isAuthenticatedClinic, new CreateProductController().handle);
router.get('/products', isAuthenticatedClinic, new ListProductsController().handle);
router.put('/product', isAuthenticatedClinic, new UpdateProductController().handle);
router.delete('/product', isAuthenticatedClinic, new DeleteProductController().handle);
router.get('/product/unique', isAuthenticatedUser, new DetailProductUniqueController().handle);

router.post('/service', isAuthenticatedUser, new CreateServiceController().handle);

export { router };