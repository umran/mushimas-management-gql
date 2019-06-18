const { GraphQLList, GraphQLNonNull, GraphQLID } = require('graphql')
const { Bucket } = require('./outputTypes')

module.exports = resolver => ({
  findOne_bucket: {
    type: Bucket,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'findOne_bucket',
        root,
        args,
        context
      })
    }
  },
  find_bucket: {
    type: new GraphQLList(Bucket),
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'find_bucket',
        root,
        args,
        context
      })
    }
  }
})