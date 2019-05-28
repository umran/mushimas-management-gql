const { GraphQLSchema } = require('graphql')
const generateMutation = require('./generateMutation')
const generateQuery = require('./generateQuery')

module.exports = resolver => {
  return new GraphQLSchema({
    mutation: generateMutation(resolver),
    query: generateQuery(resolver)
  })
}