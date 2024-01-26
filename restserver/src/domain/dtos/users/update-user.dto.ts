

export class UpdateUserDto {

  private constructor(
    public readonly id: number,
    public readonly fullName: string,
    public readonly age: number,
    public readonly email: string,
    public readonly password: string,
    public readonly updatedAt?: Date,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.fullName ) returnObj.fullName = this.fullName;
    if ( this.age ) returnObj.age = this.age;
    if ( this.email ) returnObj.email = this.email;
    if ( this.password ) returnObj.password = this.password;
    if ( this.updatedAt ) returnObj.updatedAt = this.updatedAt;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateUserDto?]  {

    const { id, fullName, age, email, password, updatedAt } = props;
    let newUpdatedAt = updatedAt;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( updatedAt ) {
      newUpdatedAt = new Date( updatedAt)
      if ( newUpdatedAt.toString() === 'Invalid Date' ) {
        return ['UpdatedAt must be a valid date']
      }
    }

    return [undefined, new UpdateUserDto(id, fullName, age, email, password, newUpdatedAt )];
  }


}