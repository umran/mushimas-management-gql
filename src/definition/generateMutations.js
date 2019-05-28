const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql')
const Result = require('../resultType')
const { Field } = require('./inputTypes')

module.exports = resolver => ({
  create_definition: {
    type: Result,
    args: {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      class: {
        type: new GraphQLNonNull(GraphQLString)
      },
      fields: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Field)))
      }
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'create_definition',
        root,
        args,
        context
      })
    }
  },
  update_definition: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID),
      fields: {
        type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Field)))
      }
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'update_definition',
        root,
        args,
        context
      })
    }
  },
  disable_definition: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID)
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'disable_definition',
        root,
        args,
        context
      })
    }
  },
  enable_definition: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID)
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'enable_definition',
        root,
        args,
        context
      })
    }
  },
  delete_definition: {
    type: Result,
    args: {
      _id: new GraphQLNonNull(GraphQLID)
    },
    resolve: async (root, args, context) => {
      return await resolver({
        method: 'delete_definition',
        root,
        args,
        context
      })
    }
  }
})