const { GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql')

const FieldOptions = new GraphQLInputObjectType({
  name: '_FieldOptions',
  fields: () => ({
    type: {
      type: GraphQLString
    },
    required: {
      type: GraphQLBoolean
    },
    enabled: {
      type: GraphQLBoolean
    },
    ref: {
      type: GraphQLString
    },
    item: {
      type: FieldOptions
    }
  })
})

const Field = new GraphQLInputObjectType({
  name: '_Field',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    options: {
      type: new GraphQLNonNull(FieldOptions)
    }
  })
})

module.exports = {
  Field
}