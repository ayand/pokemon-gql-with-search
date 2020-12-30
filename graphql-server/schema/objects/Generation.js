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

const AbilityContainer = require('./AbilityContainer');
const MoveContainer = require('./MoveContainer');
const TypeContainer = require('./TypeContainer');
const SpeciesContainer = require('./SpeciesContainer');
const Name = require('./Name');
const VersionGroupContainer = require('./VersionGroupContainer');
const RegionContainer = require('./RegionContainer');

const Generation = new GraphQLObjectType({
    name: 'Generation',
    fields: () => ({
      abilities: { type: new GraphQLList(AbilityContainer) },
      id: { type: GraphQLID },
      main_region: { type: RegionContainer },
      moves: { type: new GraphQLList(MoveContainer) },
      name: { type: GraphQLString, resolve(parentValue, args, reg) { return parentValue.name.toUpperCase().replace("-", " "); } },
      names: { type: new GraphQLList(Name) },
      pokemon_species: { type: new GraphQLList(SpeciesContainer) },
      types: { type: new GraphQLList(TypeContainer) },
      version_groups: { type: new GraphQLList(VersionGroupContainer) }
    })
})

module.exports = Generation;
