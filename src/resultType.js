const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql')

const Result = new GraphQLObjectType({
  name: 'result',
  fields: () => ({
    status: {
      type: GraphQLString
    },
    message: {
      type: GraphQLString
    },
    _id: {
      type: GraphQLID
    }
  })
})

module.exports = Result