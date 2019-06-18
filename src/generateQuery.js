const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql')
const generateDefinition = require('./definition/generateQueries')
const generateBucket = require('./bucket/generateQueries')

module.exports = resolver => new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...generateDefinition(resolver),
    ...generateBucket(resolver)
  }
})