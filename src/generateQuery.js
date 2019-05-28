const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')

module.exports = resolver => new GraphQLObjectType({
  name: 'Query',
  fields: {
    echo: {
      type: GraphQLString,
      args: {
        echo: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: async (root, args, context) => {
        return args.echo
      }
    }
  }
})