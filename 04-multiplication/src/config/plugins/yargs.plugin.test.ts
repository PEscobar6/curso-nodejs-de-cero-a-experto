
const runCommand = async( args: string[] ) => {
    process.argv = [ ...process.argv, ...args ];
    
    const { yarg } = await import('./yargs.plugin');

    return yarg;
}


describe('Test yargs.plugin', () => {
    const originalArgv = process.argv;
    const optionsCommand = [
        '-b', '7',
        '-l', '20',
        '-s',
        '-n', 'table-7',
        '-d', 'outputs'
    ];

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })

    test('should return defaults values', async() => {
        const argv = await runCommand(['-b', '5']);
        expect( argv ).toEqual( expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs',
        }));
    });

    test('should return configuration with custom values', async() => {
        const argv = await runCommand(optionsCommand);
        expect( argv ).toEqual( expect.objectContaining({
            b: 7,
            l: 20,
            s: true,
            n: 'table-7',
            d: 'outputs',
        }));
    });

});