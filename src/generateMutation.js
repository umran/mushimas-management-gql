const { GraphQLObjectType } = require('graphql')
const generateDefinition = require('./definition/generateMutations')
const generateBucket = require('./bucket/generateMutations')

module.exports = resolver => new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...generateDefinition(resolver),
    ...generateBucket(resolver)
  }
})