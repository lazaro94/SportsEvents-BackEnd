var mongoose = require('mongoose');

//Define the collection schema
var teamSchema = mongoose.Schema({
    id:{
        type: String,
        auto: true
    },
    name:{
        type: String,
        required: true
    },
    createDate:{
        type: Date,
        default: Date.now
    },
    shortName:{
        type: String,
        required: false
    }
})


//Export the teams collection
module.exports = mongoose.model('teams', teamSchema);