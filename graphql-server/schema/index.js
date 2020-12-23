const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./queries');

module.exports = new GraphQLSchema({
    query: RootQueryType
});
