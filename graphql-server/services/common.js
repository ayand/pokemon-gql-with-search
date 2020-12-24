const axios = require('axios');

function getResource(id, resource) {
    return axios.get(`https://pokeapi.co/api/v2/${resource}/${id}`).then(res => res.data);
}

function getResources(ids, resource) {
    const urls = ids.map(id => `https://pokeapi.co/api/v2/${resource}/${id}`);
    const requests = urls.map(url => axios.get(url))

    return axios.all(requests).then(axios.spread((...responses) => { return responses.map(r => r.data); }));
}

module.exports = { getResource, getResources };
