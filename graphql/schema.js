import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {info, infos} from './info'
import {comedy} from './comedy'
import {student} from './student'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      comedy,
      student
    }
  })
})
