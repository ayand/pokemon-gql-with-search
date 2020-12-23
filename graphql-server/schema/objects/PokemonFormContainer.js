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

const PokemonForm = require('./PokemonForm');
const PokemonFormService = require('../../services/pokemonForm');

const PokemonFormContainer = new GraphQLObjectType({
    name: 'PokemonFormContainer',
    fields: () => ({
        id: {
          type: GraphQLID,
          resolve(parentValue, args) {
              return parentValue.name;
          }
        },
        form: {
            type: PokemonForm,
            resolve(parentValue, args) {
                const url = parentValue.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return PokemonFormService.getPokemonForm(id);
            }
        }
    })
});

module.exports = PokemonFormContainer;
