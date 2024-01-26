import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .options('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .options('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .options('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'Name of the file'
    })
    .options('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Destination of the file'
    }).check((argv, options) => {
        if( argv.b < 1 ) throw new Error('Base must be greater than 0');
        if( argv.l < 1 ) throw new Error('Limit must be greater than 0');
        
        return true;
    })
    .parseSync();
