const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions')
const SpeakerAPI = require('./datasources/speakers')

const sessions = require('./data/sessions.json')

const typeDefs = require('./schema.js')

const resolvers = require('./resolvers.js')

const dataSources = () => ({
 SessionAPI: new SessionAPI(),
 SpeakerAPI: new SpeakerAPI()
});
const server = new ApolloServer({typeDefs, resolvers, dataSources});
server
    .listen({port: process.env.port || 4000})
    .then(({url})=>{
        console.log(`GraphQL running at ${url}`)
    });