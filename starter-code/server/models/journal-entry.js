/*jshint esversion:6*/
const express       = require('express');
const router        = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const JournalEntrySchema = new Schema({
  date:         { type: Date },
  title:        String,
  content:      String
});

JournalEntrySchema.set('timestamps', true);

const JournalEntry = mongoose.model('journalEntries', JournalEntrySchema);
module.exports = JournalEntry;
