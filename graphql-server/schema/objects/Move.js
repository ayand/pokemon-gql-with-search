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

const EffectEntry = require('./EffectEntry');
const Type = require('./Type');
const MoveDamageClass = require('./MoveDamageClass');

const TypeService = require('../../services/type');
const MoveDamageClassService = require('../../services/moveDamageClass');

const Move = new GraphQLObjectType({
    name: 'Move',
    fields: () => ({
        id: { type: GraphQLID },
        accuracy: { type: GraphQLInt },
        damage_class: {
            type: MoveDamageClass,
            resolve(parentValue, args, res) {
                const url = parentValue.damage_class.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return MoveDamageClassService.getMoveDamageClass(id);
            }
        },
        effect_entries: { type: new GraphQLList(EffectEntry) },
        name: {
            type: GraphQLString,
            resolve(parentValue, args, res) {
                return parentValue.name.toUpperCase().replace("-", " ");
            }
        },
        power: { type: GraphQLInt },
        pp: { type: GraphQLInt },
        priority: { type: GraphQLInt },
        type: {
            type: Type,
            resolve(parentValue, args, res) {
                const url = parentValue.type.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return TypeService.getType(id);
            }
        }
    })
});

module.exports = Move;
