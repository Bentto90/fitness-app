const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { type: String, 
        required:true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number,
        required: true
    },
    weight: { 
        type: Number,
        required: true 
    },
    height: { 
        type: Number,
        required: true
     },
    activeLevel: { 
        type: String,
        required: true
     },
    goal: { 
        type: String,
        required: true
     },
    token : { 
        type: String
     },
});

module.exports = model('User', userSchema);