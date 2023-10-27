import { describe, expect, it, test } from '@jest/globals';
// import {} from '../../';
import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises', () => {
    
    test('should ', async() => {
        
        // 1. Arrange
        const pokemonId = 1;
        
        // 2. Act
        const pokemonName = await getPokemonById( pokemonId );
        
        // 3. Assert
        expect( pokemonName ).toBe('bulbasaur')
    });

    test('should return an error if pokemon does not exist', async() => {
        
        // 1. Arrange
        const pokemonId = 1000000;

        try {
            // 2. Act
            await getPokemonById( pokemonId );
            
            // 3. Assert
            expect( true ).toBeFalsy();
        } catch (error) {
            expect( error ).toBe(`Pokemon not found with Id ${pokemonId}`);            
        }
        

    });

});