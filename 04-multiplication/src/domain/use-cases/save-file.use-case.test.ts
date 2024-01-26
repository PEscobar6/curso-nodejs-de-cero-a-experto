import { describe, expect, it, test } from '@jest/globals';
// import '@types/jest'; si lo agrego el editor de codigo me marca rojo el afterEach
import { SaveFile } from './save-file.use-case';
import * as fs from 'fs';

describe('SaveFileUseCase', () => {

    afterEach(() => {
        fs.rmSync('outputs', { recursive: true, force: true });
    });
    

    test('Should save file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        const options = {
            fileContent: 'Hello World'
        };

        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
        
        expect( result ).toBeTruthy();
        expect( checkFile ).toBeTruthy();
        expect( fileContent ).toEqual(options.fileContent);
    });
})