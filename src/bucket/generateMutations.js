const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql')
const { Result } = require('../resultType')

module.exports = resolver => ({
  create_bucket: {
    type: Result,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'create_bucket',
        root,
        args,
        context
      })
    }
  },
  disable_bucket: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID)
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'disable_bucket',
        root,
        args,
        context
      })
    }
  },
  enable_bucket: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID)
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'enable_bucket',
        root,
        args,
        context
      })
    }
  },
  delete_bucket: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID)
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'delete_bucket',
        root,
        args,
        context
      })
    }
  }
})