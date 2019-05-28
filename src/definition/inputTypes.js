const { GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLNonNull } = require('graphql')

const FieldOptions = new GraphQLInputObjectType({
  name: 'fieldOptions',
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
    },
    es_indexed: {
      type: GraphQLBoolean
    },
    es_keyword: {
      type: GraphQLBoolean
    }
  })
})

const Field = new GraphQLInputObjectType({
  name: 'field',
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