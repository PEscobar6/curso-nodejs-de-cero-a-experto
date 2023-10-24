const axios = require('axios');

const httpClientPlugin = {
    get: async( url ) => {
        // const resp = await fetch( url );
        // return await resp.json();

        const {data} = await axios.get(url);
        // console.log(data);
        return data;
    },
    post: async( url ) => {},
    put: async( url ) => {},
    delete: async( url ) => {},
};

module.exports = {
    http: httpClientPlugin,
}