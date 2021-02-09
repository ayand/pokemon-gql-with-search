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

module.exports.Pokemon = new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => {
      const {PokemonAbilityContainer} = require('./PokemonAbilityContainer');
      const {PokemonFormContainer} = require('./PokemonFormContainer');
      const {SpeciesContainer} = require('./SpeciesContainer');
      const {PokemonStatContainer} = require('./PokemonStatContainer');
      const {PokemonTypeContainer} = require('./PokemonTypeContainer');
      const {PokemonMoveContainer} = require('./PokemonMoveContainer');
      const {VersionGameIndex} = require('./VersionGameIndex');
      const {PokemonLocationArea} = require('./PokemonLocationArea');

      const PokemonLocationAreaService = require('../../services/pokemonLocationArea');

      return {
          abilities: { type: new GraphQLList(PokemonAbilityContainer) },
          base_experience: { type: GraphQLInt },
          forms: { type: new GraphQLList(PokemonFormContainer) },
          game_indices: { type: new GraphQLList(VersionGameIndex) },
          height: { type: GraphQLInt },
          id: { type: GraphQLID },
          is_default: { type: GraphQLBoolean },
          location_area_encounters: {
              type: new GraphQLList(PokemonLocationArea),
              resolve(parentValue) {
                  const url = parentValue.location_area_encounters;
                  const parts = url.split("/");
                  const index = parts.length - 2;
                  console.log(parts[index]);
                  return PokemonLocationAreaService.getPokemonLocationAreas(parts[index]);
              }
          },
          moves: { type: new GraphQLList(PokemonMoveContainer) },
          name: {
            type: GraphQLString,
            resolve(parentValue, args, res) {
                return parentValue.name.toUpperCase().replace(/-/g, " ");
            }
          },
          order: { type: GraphQLInt },
          species: {
              type: SpeciesContainer,
          },
          sprite_back_default: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.back_default } },
          sprite_back_female: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.back_female } },
          sprite_back_shiny: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.back_shiny } },
          sprite_back_shiny_female: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.back_shiny_female } },
          sprite_front_default: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.front_default } },
          sprite_front_female: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.front_female } },
          sprite_front_shiny: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.front_shiny } },
          sprite_front_shiny_female: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.front_shiny_female } },
          sprite_dream_world_default: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.other.dream_world.front_default } },
          sprite_dream_world_female: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.other.dream_world.front_female } },
          sprite_official_artwork: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.sprites.other["official-artwork"].front_default } },
          stats: {
              type: new GraphQLList(PokemonStatContainer)
          },
          types: { type: new GraphQLList(PokemonTypeContainer) },
          weight: { type: GraphQLInt }
      }
    }
});
