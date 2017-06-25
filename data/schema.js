import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `

type Appindata {
start: String
}

# the schema allows the following query:
type Query {
  appindata(id: String, key: String, path: String): String,
}
`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});
