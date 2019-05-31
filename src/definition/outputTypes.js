const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql')

const FieldOptions = new GraphQLObjectType({
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
    }
  })
})

const Field = new GraphQLObjectType({
  name: 'field',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    options: {
      type: FieldOptions
    }
  })
})

const Definition = new GraphQLObjectType({
  name: 'definition',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    class: {
      type: GraphQLString
    },
    fields: {
      type: new GraphQLList(Field)
    }
  })
})

module.exports = {
  Definition
}