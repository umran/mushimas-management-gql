const { GraphQLSchema } = require('graphql')
const generateMutation = require('./generateMutation')

module.exports = resolver => {
  return new GraphQLSchema({
    mutation: generateMutation(resolver)
  })
}