const messagesResolvers = require('./messages');
const usersResolvers = require('./Users');

module.exports = {
    Query: {
        ...messagesResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
    }
};