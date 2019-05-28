const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql')

const Bucket = new GraphQLObjectType({
  name: 'bucket',
  fields: () => ({
    _id: GraphQLID,
    name: GraphQLString
  })
})

module.exports = {
  Bucket
}