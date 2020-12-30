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

const Stat = new GraphQLObjectType({
    name: 'Stat',
    fields: () => ({
        id: {
          type: GraphQLID,
          resolve(parentValue, args, res) {
              return parentValue.stat.name;
          }
        },
        name: {
          type: GraphQLString,
          resolve(parentValue, args, res) {
              return parentValue.stat.name.toUpperCase().replace(/-/g, " ");
          }
        },
        value: {
            type: GraphQLInt,
            resolve(parentValue, args, res) {
                return parentValue.base_stat;
            }
        },
        effort: {
            type: GraphQLInt,
            resolve(parentValue, args, res) {
                return parentValue.effort;
            }
        }
    })
})

module.exports = Stat;
