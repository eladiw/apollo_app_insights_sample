const typeDefinitions = `

type Appindata {
  start: String
}

# the schema allows the following query:
type Query {
  appindata(id: String, key: String, path: String): String,
}

# we need to tell the server which types represent the root query
# and root mutation types. We call them RootQuery and RootMutation by convention.
schema {
  query: Query
}
`;

export default [typeDefinitions];
