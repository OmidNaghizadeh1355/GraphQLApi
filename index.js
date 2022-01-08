const { ApolloServer, gql, ApolloError } = require('apollo-server');
const SessionAPI = require('./datasources/sessions')
const SpeakerAPI = require('./datasources/speakers')

const sessions = require('./data/sessions.json')

const typeDefs = require('./schema.js')

const resolvers = require('./resolvers.js')

const dataSources = () => ({
 SessionAPI: new SessionAPI(),
 SpeakerAPI: new SpeakerAPI()
});
const server = new ApolloServer({
    typeDefs, 
    resolvers, 
    dataSources, 
    debug: false,
    formatError: (err) => {
        if(err.extensions.code == 'INTERNAL_SERVER_ERROR'){
            return new ApolloError("Call the Administrator", "ERROR", {token: "uniquetoken"});
        }
        return err;
    }
});
server
    .listen({port: process.env.port || 4000})
    .then(({url})=>{
        console.log(`GraphQL running at ${url}`)
    });