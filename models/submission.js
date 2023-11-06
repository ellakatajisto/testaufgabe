const mongoose = require('mongoose');

const submitSchema = mongoose.Schema({
    anrede: {
        type: String,
         required: true
    },
    name: {
        type: String,
         required: true
    },
    email: {
        type: String,
         required: true 
    },
    select: {
        type: String,
        required: true,   
    },
    beschreibung: {
        type: String
    },
    agreed: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Submission", submitSchema);