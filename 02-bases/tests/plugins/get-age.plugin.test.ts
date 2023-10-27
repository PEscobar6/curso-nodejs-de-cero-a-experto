import { describe, expect, it, test, jest } from '@jest/globals';
import { getAge } from '../../src/plugins/get-age.plugin';

describe('plugins/get-age.plugin.ts', () => {
    
    test('getAge() should return the age of a person', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect( typeof age ).toBe('number');
    });

    test('getAge should return current age', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculateAge = new Date().getFullYear() - new Date(birthdate).getFullYear();
    });

    test('getAge should return 0 years', () => {
        const spyDate = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1995-10-21';
        const age = getAge(birthdate);

        expect( age ).toBe(0);
        expect( spyDate ).toHaveBeenCalled();
    });

});