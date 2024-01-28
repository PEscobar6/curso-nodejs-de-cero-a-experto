import { CreateTable } from './create-table.use-case';

describe('CreateTable', () => {
    test('Should create table with default values', () => {
        const createTable = new CreateTable();
        const table = createTable.execute({ base: 1 });
        const rows = table.split('\n').length;
        

        expect( createTable ).toBeInstanceOf( CreateTable );
        expect( table ).toContain('1 x 1 = 1');
        expect( table ).toContain('1 x 2 = 2');
        expect( rows ).toBe(10);
    });

    test('should create table with custom values', () => {
        const options = {
            base: 3,
            limit: 20,
        }

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect( table ).toContain(`${options.base} x 1 = 3`);
        expect( table ).toContain(`${options.base} x 10 = 30`);
        expect( table ).toContain(`${options.base} x 20 = 60`);
        expect( rows ).toBe(20);
    });
})