/*jshint esversion:6*/
const mongoose = require('mongoose');
const JournalEntry = require('../models/journal-entry');

mongoose.connect("mongodb://localhost/JournalEntries");

const journalEntries = [{
    date: new Date(),
    title: "Guardians",
    content: "blabla bla bal 1",
 },
 {
     date: new Date(),
     title: "Guardians2",
     content: "blabla bla bal 2",
  },
  {
      date: new Date(),
      title: "Guardians3",
      content: "blabla bla bal 3",
   },
   {
       date: new Date(),
       title: "Guardians4",
       content: "blabla bla bal 4",
    },
    {
        date: new Date(),
        title: "Guardians5",
        content: "blabla bla bal 5",
     },
     {
         date: new Date(),
         title: "Guardians6",
         content: "blabla bla bal 6",
      },
      {
          date: new Date(),
          title: "Guardians7",
          content: "blabla bla bal 7",
       },
       {
           date: new Date(),
           title: "Guardians8",
           content: "blabla bla bal 8",
        },
        {
            date: new Date(),
            title: "Guardians9",
            content: "blabla bla bal 9",
         },
         {
             date: new Date(),
             title: "Guardians10",
             content: "blabla bla bal 10",
          },
];


JournalEntry.create(journalEntries, (err, docs) => {
  if (err) { throw err };

docs.forEach( (journalEntries) => {
    console.log(journalEntries.title);
});
  mongoose.connection.close();
});
