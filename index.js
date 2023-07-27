const { ApolloServer } = require('apollo-server');
const SessionDataSource = require("./datasources/sessions");
const SpeakerDataSource = require("./datasources/speakers");
const UserDataSource = require("./datasources/users");
const resolvers = require("./resolvers/index");
const auth = require('./utils/auth')


const typeDefs = require('./schema');


const dataSources = () => ({
    sessionDataSource: new SessionDataSource(),
    speakerDataSource: new SpeakerDataSource(),
    userDataSource: new UserDataSource(),
});
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`graphQL running at ${url}`);
});
