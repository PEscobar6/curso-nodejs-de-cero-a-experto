import { describe, expect, it, test } from '@jest/globals';
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('js-foundation/03-callbacks', () => {
    
    test('getUserById should return an error if user does not exist', (done) => {
        // 1. Arrange
        const id = 10;

        // 2. Act
        
        // 3. Assert
        getUserById(id, (err, user) => {
            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();
            done();
        });
    });

    test('getUserById should be John Doe', (done) => {
        // 1. Arrange
        const id = 1;

        // 2. Act
        
        // 3. Assert
        getUserById(id, (err, user) => {
            expect( user?.id ).toBe(id);
            expect( user?.name ).toBe('John Doe');

            expect( err ).toBeUndefined();
            done();
        });
    });

});
