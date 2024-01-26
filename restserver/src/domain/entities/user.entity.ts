export class UserEntity {

  constructor(
    public id: number,
    public fullName: string,
    public age: number,
    public email: string,
    public password: string,
    public createdAt?: Date|null,
    public updatedAt?: Date|null
  ) {}

  get isCreated() {
    return !!this.createdAt;
  }

  public static fromObject( object: {[key: string]: any} ): UserEntity {
    const { id, fullName, age, email, password, createdAt, updatedAt } = object;
    if ( !id ) throw 'Id is required';
    if ( !fullName ) throw 'fullName is required';
    if ( !age ) throw 'age is required';
    if ( !email ) throw 'email is required';
    if ( !password ) throw 'password is required';

    let newCreatedAt, newUpdatedAt;
    if ( createdAt ) {
      newCreatedAt = new Date(createdAt);
      if ( isNaN( newCreatedAt.getTime() ) ) {
        throw 'CreatedAt is not a valid date'
      }
    }
    if ( updatedAt ) {
      newUpdatedAt = new Date(updatedAt);
      if ( isNaN( newUpdatedAt.getTime() ) ) {
        throw 'UpdatedAt is not a valid date'
      }
    }

    return new UserEntity(id, fullName, age, email, password, newCreatedAt, newUpdatedAt);
  }

}
