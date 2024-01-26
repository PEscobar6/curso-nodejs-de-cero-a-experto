import { Router } from 'express';
import { UsersController } from './controller.ddd';
import { UserDatasourceImpl } from '../../infrastructure/datasource/user.datasource.impl';
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl';

export class UsersRoutes {


  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();
    const userRepository = new UserRepositoryImpl( datasource );
    const userController = new UsersController(userRepository);

    router.get('/', userController.getUsers );
    router.get('/:id', userController.getUserById );
    
    router.post('/', userController.createUser );
    router.put('/:id', userController.updateUser );
    router.delete('/:id', userController.deleteUser );

    return router;
  }


}

