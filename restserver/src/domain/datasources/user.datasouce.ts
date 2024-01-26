import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserEntity } from '../entities/user.entity';



export abstract class UserDatasource {

  abstract create( createTodoDto: CreateUserDto ): Promise<UserEntity>;

  //todo: paginación
  abstract getAll(): Promise<UserEntity[]>;

  abstract findById( id: number ): Promise<UserEntity>;
  abstract updateById( updateTodoDto: UpdateUserDto ): Promise<UserEntity>;
  abstract deleteById( id: number ): Promise<UserEntity>;

}