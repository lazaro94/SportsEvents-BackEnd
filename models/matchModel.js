const mongoose = require('mongoose');
const maxTeamsPerMatch = 2;

//Define the collection schema
var matchSchema = mongoose.Schema({
    startDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    status:{
        type: String,
        enum: ["Not Started", "In Progress", "Finished"],
        default: "Not Started"
    },
    teams:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "teams",
            validate: [arrayLimit]
        }
    ]
})

//Validate the amount of teams assigned to the match
function arrayLimit(val) {
    return val.length <= maxTeamsPerMatch;
  }

//Export the teams collection
module.exports = mongoose.model('matches', matchSchema);