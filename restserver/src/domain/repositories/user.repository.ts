import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UserEntity } from '../entities/user.entity';



export abstract class UserRepository {

  abstract create( createUserDto: CreateUserDto ): Promise<UserEntity>;

  //todo: paginación
  abstract getAll(): Promise<UserEntity[]>;

  abstract findById( id: number ): Promise<UserEntity>;
  abstract updateById( updateUserDto: UpdateUserDto ): Promise<UserEntity>;
  abstract deleteById( id: number ): Promise<UserEntity>;

}