const mongoose = require('mongoose');

// Define Schemes
const gameSchema = new mongoose.Schema({
    key: {type: String},
    name: { type: String },
    hint1: { type: String },
    hint2: { type: String },
    hint3: { type: String },
    hint4: { type: String },
    mynum: {type: Number},
    tnum: {type: Number},
    cnum: {type: Number}
},
{
  timestamps: true
});
// Create new game document
gameSchema.statics.create = function (payload) {
    // this === Model
    const game = new this(payload);
    // return Promise
    return game.save();
  };
  
  // Find All
  gameSchema.statics.findAll = function () {
    // return promise
    // V4부터 exec() 필요없음
    return this.find({});
  };
  
  // Find One by gameid
  gameSchema.statics.findOneBygameid = function (gameid) {
    return this.find({ gameid });
  };


  // Update by gameid
  gameSchema.statics.updateBygameid = function (gameid, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ gameid }, payload, { new: true });
  };

  // Update by name
  gameSchema.statics.updateByname = function (name, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ name }, payload, { new: true });
  };
  // Update by name
  gameSchema.statics.updateByphonenumber = function (phonenumber, payload) {
    // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({ phonenumber }, payload, { new: true });
  };
  
  // Delete by gameid
  gameSchema.statics.deleteBygameid = function (gameid) {
    return this.remove({ gameid });
  };

// Create Model & Export
module.exports = mongoose.model('game', gameSchema);