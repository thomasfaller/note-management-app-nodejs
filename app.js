const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
const chalk = require('chalk')
const log = (item) => {
  console.log(item)
}

const error = chalk.bold.red
const warning = chalk.keyword('orange')
const success = chalk.bold.green
const NoteNotFound = () => { warning('Note not found.') }

log(success('Starting app.js...'))

const notes = require('./notes.js')

const argv = yargs.argv
const command = argv._[0]

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (!note) {
    log('Error')
    log('---') 
    log(warning(`A note with the title of ${argv.title} already exists.`))
  } else { 
    log(success('New note added!'))
    log('---')
    log(`Title: ${argv.title}`)
    log(`Body: ${argv.body}`)
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  const note = notes.getNote(argv.title)
  if (note) {
    log(success('Note found'))
    log('---')
    log(`Title: ${argv.title}`)
    log(`Body: ${argv.body}`)
  } else {
    log(NoteNotFound())
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title)
  const message = noteRemoved ? success('Note was removed') : NoteNotFound();
  log(message)
} else {
  console.log(warning('Command not found. \n You can type :\n - "add" to add new notes \n - "list" to list all notes.'))
}