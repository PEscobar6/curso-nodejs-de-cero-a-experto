import { prisma } from '../../data/postgres';
import { CreateUserDto, UserDatasource, UserEntity, UpdateUserDto } from '../../domain';
import { bcryptPlugin } from '../../plugins/bcrypt.plugin';

export class UserDatasourceImpl implements UserDatasource {

  async create( createUserDto: CreateUserDto ): Promise<UserEntity> {
    const hashedPassword = await bcryptPlugin.hash(createUserDto.password);

    const user = await prisma.user.create({
      data: {
        fullName: createUserDto.fullName,
        age: createUserDto.age,
        email: createUserDto.email,
        password: hashedPassword,
      },
    });

    return UserEntity.fromObject( user );
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await prisma.user.findMany();
    return users.map( user => UserEntity.fromObject(user) );
  }

  async findById( id: number ): Promise<UserEntity> {
    const user = await prisma.user.findFirst({
      where: { id }
    });

    if ( !user ) throw `User with id ${ id } not found`;
    return UserEntity.fromObject(user);
  }

  async updateById( updateUserDto: UpdateUserDto ): Promise<UserEntity> {
    await this.findById( updateUserDto.id );
    
    const updatedUser = await prisma.user.update({
      where: { id: updateUserDto.id },
      data: updateUserDto!.values
    });

    return UserEntity.fromObject(updatedUser);
  }

  async deleteById( id: number ): Promise<UserEntity> {
    await this.findById( id );
    const deleted = await prisma.user.delete({
      where: { id }
    });

    return UserEntity.fromObject( deleted );
  }

}