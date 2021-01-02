const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} = graphql;

module.exports.SpeciesVariety = new GraphQLObjectType({
    name: 'SpeciesVariety',
    fields: () => {
        const {PokemonContainer} = require('./PokemonContainer');
        return {
            id: {
              type: GraphQLID,
              resolve(parentValue) {
                  const url = parentValue.pokemon.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return id;
              }
            },
            is_default: { type: GraphQLBoolean },
            pokemon: { type: PokemonContainer }
        }
    }
})
