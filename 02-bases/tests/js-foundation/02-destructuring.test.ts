import { describe, expect, it, test } from '@jest/globals';
import { characters } from '../../src/js-foundation/02-destructuring';

describe('02-destructuring', () => {
    test('characcters should contains Flash, Sueperman', () => {
        // 1. Arrange
        // 2. Act
        // 3. Assert
        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    });

    test('firts character should be Flash, and second Superman', () => {
        // 1. Arrange
        const [flash, superman] = characters;
        // 2. Act
        // 3. Assert
        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
    });
});