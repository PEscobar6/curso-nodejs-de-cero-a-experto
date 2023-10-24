const { getUuid, getAge } = require('./plugins/index');

// const {emailTemplate} =  require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');
// const {getPokemonById} = require('./js-foundation/06-promises');
// const {getPokemonById} = require('./js-foundation/07-async');

const { buildLogger } = require('./plugins')


const logger = buildLogger('app.js');
logger.log('Hola');
logger.error('Errorr');

// getPokemonById(4)
//     .then( ( pokemon ) => console.log({ pokemon }))
//     .catch( (err) => console.log('Pokemon no existe') )
//     .finally( (final) => console.log('finalemente'));






// ! Referencia a la función factory y uso

// const {buildMakePerson} = require('./js-foundation/05-factory');

// const makePerson = buildMakePerson({ getUuid, getAge });

// const obj = { name: 'John', birthdate: '1999-10-06' };

// const john = makePerson(obj);

// console.log({john});