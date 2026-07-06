const { ApolloServer, gql } = require('apollo-server');

const students = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 21 },
];

const typeDefs = gql`
  type Student {
    matriculation_id: String!
    name: String!
    email: String!
    birthday: Date!
    enrollment_date: Date!
    subjects: [Subject!]!
    course: Course
  }

  type Query {
      students: [Student]
  }
`;


const resolvers = {
  Query: { students: () => students },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL Server running at ${url}`);
});


