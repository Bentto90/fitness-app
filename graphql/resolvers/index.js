const messagesResolvers = require('./messages');
const usersResolvers = require('./users');

module.exports = {
    Query: {
        ...messagesResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
    }
};