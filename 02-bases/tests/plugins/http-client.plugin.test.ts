import { describe, expect, it, test, jest } from '@jest/globals';
import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin', () => {
    
    test('httpClientPlugin should return string', async() => {
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual({
            id: 1,
            userId: 1, 
            title: 'delectus aut autem', 
            completed: expect.any(Boolean)
        });
    });

    test('httpClientPlugin should have POST, PUT, DELETE methods', () => {
        expect( typeof httpClientPlugin.post ).toBe('function');
        expect( typeof httpClientPlugin.put ).toBe('function');
        expect( typeof httpClientPlugin.delete ).toBe('function');
    });

});
