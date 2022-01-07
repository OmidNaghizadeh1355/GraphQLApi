const {ApolloServer} = require('apollo-server');
const server = new ApolloServer();
server
    .listen({port: process.env.port || 4000})
    .then((url)=>{
        console.log('GraphQL running at ${url}')
    })