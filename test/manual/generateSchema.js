const generateSchema = require('../../src/generateSchema')

const schema = generateSchema(async ({ method, root, args, context }) => {
  return {
    status: 'OK',
    message: 'this is just a placeholder result'
  }
})