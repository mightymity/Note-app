const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let NoteSchema = new Schema({
    title: String,
    content: String
  },{
    timestamps:true},{collection: 'note'});

  module.exports = mongoose.model('Note',NoteSchema)
