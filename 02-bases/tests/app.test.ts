import { describe, expect, it, test } from '@jest/globals';

// A A A

describe('Test app file', () => {
    test('Should be 30', () => {
        // 1. Arrange
        const num1 = 10;
        const num2 = 20;

        // 2. Act
        const result = num1 + num2 + 5;

        // 3. Assert
        expect(result).toBe(35);
    });
})