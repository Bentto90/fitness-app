const { ApolloServer }  = require('apollo-server');
const path = require('path');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');


const MONGODB ="mongodb+srv://cch3056:finalproject@apolloserver.mv7xxrq.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs,
    resolvers
});


mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connected");
        return server.listen({port: 3001});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    }
);



