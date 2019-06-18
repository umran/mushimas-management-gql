const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql')
const { GraphQLDateTime } = require('graphql-iso-date')

const Bucket = new GraphQLObjectType({
  name: 'bucket',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    _state: {
      type: GraphQLString
    },
    _lastModified: {
      type: GraphQLDateTime
    },
    name: {
      type: GraphQLString
    }
  })
})

module.exports = {
  Bucket
}