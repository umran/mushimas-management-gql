const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql')
const { Definition } = require('./outputTypes')

module.exports = resolver => ({
  findOne_definition: {
    type: Definition,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'findOne_definition',
        root,
        args,
        context
      })
    }
  },
  find_definition: {
    type: new GraphQLList(Definition),
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'find_definition',
        root,
        args,
        context
      })
    }
  }
})