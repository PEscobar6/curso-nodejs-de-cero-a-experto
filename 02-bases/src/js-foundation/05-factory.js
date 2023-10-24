// const { getUuid, getAge } = require('../plugins/index');

const buildMakePerson = ({ getUuid, getAge }) => {

    return ({ name, birthdate }) => {
        return {
            id: getUuid(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }

}


// const obj = { name: 'John', birthdate: '1999-10-06' };

// const john = buildPerson( obj );

// console.log(john);

module.exports = {
    buildMakePerson,
}