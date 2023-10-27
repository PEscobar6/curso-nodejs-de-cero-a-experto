import { describe, expect, it, test } from '@jest/globals';
import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template', () => {
    test('emailTemplate should contain a greeting', () => {
        // 1. Arrange
        // 2. Act
        // 3. assert
        expect(emailTemplate).toContain('Hi, ');
    });

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);
    });
});