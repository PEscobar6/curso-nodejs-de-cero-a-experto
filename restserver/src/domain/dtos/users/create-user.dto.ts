import { bcryptPlugin } from "../../../plugins/bcrypt.plugin";
export class CreateUserDto {

  private constructor(
    public readonly fullName: string,
    public readonly age: number,
    public readonly email: string,
    public readonly password: string
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateUserDto?]  {
    const { fullName, age, email, password } = props;

    if ( !fullName ) return ['fullName property is required', undefined];

    if ( !age ) return ['Age property is required', undefined];
    if ( age < 0 ) return ['Age must be greater than 0', undefined];

    if ( !email ) return ['Email property is required', undefined];
    if ( !password ) return ['Password property is required', undefined];

    return [undefined, new CreateUserDto(fullName, age, email, password)];
  }


}