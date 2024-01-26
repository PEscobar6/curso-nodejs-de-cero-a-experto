import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateUserDto, UpdateUserDto } from '../../domain/dtos';
import { UserRepository } from '../../domain';


export class UsersController {

  //* DI
  constructor(
    private readonly userRepository: UserRepository,
  ) { }


  public getUsers = async ( req: Request, res: Response ) => {
    const users = await this.userRepository.getAll();
    return res.json( users );
  };

  public getUserById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const user = await this.userRepository.findById( id );
      res.json( user );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createUser = async ( req: Request, res: Response ) => {
    const [ error, createUserDto ] = CreateUserDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const user = await this.userRepository.create( createUserDto! );
    res.json( user );

  };

  public updateUser = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateUserDto ] = UpdateUserDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedUser = await this.userRepository.updateById( updateUserDto! );
    return res.json( updatedUser );

  };


  public deleteUser = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedUser = await this.userRepository.deleteById( id );
    res.json( deletedUser );
  };

}