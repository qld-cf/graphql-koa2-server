import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType,
  GraphQLInt
} from 'graphql';

import mongoose from 'mongoose'
const Comedy = mongoose.model('Comedy')

const objType = new GraphQLObjectType({
  name: 'meta',
  fields: {
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
})

let ComedyType = new GraphQLObjectType({
  name: 'Comedy',
  fields: {
    _id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    desc: {
      type: GraphQLString
    },
    page: {
      type: GraphQLInt
    },
    author: {
      type: new GraphQLList(GraphQLString)
    },
    meta: {
      type: objType
    }
  }
})


export const comedy = {
  type: new GraphQLList(ComedyType),
  args: {},
  resolve (root, params, options) {
    return Comedy.find({}).exec()
  }
}
