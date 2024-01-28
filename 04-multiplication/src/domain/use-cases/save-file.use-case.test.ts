import { SaveFile } from './save-file.use-case';
import fs from 'fs';

describe('SaveFileUseCase', () => {

    const options = {
        fileContent: 'custom content',
        fileDestination: 'outputs',
        fileName: 'custom-table-name'
    }

    afterEach(() => {       
        const outputExists = fs.existsSync('outputs');
        if( outputExists ) fs.rmSync('outputs', { recursive: true, force: true });
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

    test('Should save file with custom values', () => {
        
        const saveFile = new SaveFile();

        const filePath = `${options.fileDestination}/${options.fileName}.txt`;
        
        const result = saveFile.execute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });

        expect( result ).toBeTruthy();
        expect( checkFile ).toBeTruthy();
        expect( fileContent ).toEqual(options.fileContent);
    });

    test('should return false if derectory could not be created', () => {
        
        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw new Error('Directory could not be created');
        });

        const result = saveFile.execute(options);

        expect( result ).toBeFalsy();
        mkdirSpy.mockRestore();
        
    });

    test('should return false if file could not be created', () => {
        
        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw new Error('File could not be created');
        });

        const result = saveFile.execute(options);

        expect( result ).toBeFalsy();
        writeFileSpy.mockRestore();

    });
})