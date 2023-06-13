const User = require('../../models/User');
const { ApolloError } = require('apollo-server-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    Mutation: {
        async registerUser(_, {registerInput: {username, email, password, weight, height, age, activeLevel, goal, weightUnits} }) {
            const oldUser = await User.findOne ({ email });

            if (oldUser) {
                throw new ApolloError('User already exists' + email, 'USER_EXISTS');
            }
            
            var hashedPassword = await bcrypt.hash(password, 12);

            const newUser = new User({
                username: username,
                email: email.toLowerCase(),
                password: hashedPassword,
                weight: parseInt(weight),
                height: height,
                age: parseInt(age),
                activeLevel: activeLevel,
                goal: goal,
                weightUnits: weightUnits,
            });

            const token = jwt.sign(
                { user_id: newUser._id, email },
                "SECRET",
                { 
                    expiresIn: "1h" 
                }
            );

            // newUser.token = token;

            const res = await newUser.save();

            return {
                id: res.id,
                ...res._doc,
                token
            };

                              
            
        },
        async loginUser(_, {loginInput: {email, password} }) {
            const user = await User.findOne({ email });
            if (user && (await bcrypt.compare(password, user.password))) {
                const token = jwt.sign(
                    { user_id: user._id, email },
                    "SECRET",
                    {
                        expiresIn: "1h"
                    }
                );
                user.token = token;
                
                return {
                    id: user.id,
                    ...user._doc
                };
            } else {
                throw new ApolloError('Invalid Credentials', 'INVALID_CREDENTIALS');

            }
            

        }
    },
    Query: {
        user: (_, {ID}) => User.findById(ID)
    }
}