const chalk = require('chalk')
const hl = chalk.bgMagenta

const log = (item) => {
  console.log(item)
}
log(chalk.bgGreen('- Starting notes.js...'))

const fs = require('fs')

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) { 
    return []
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }
  const dulicateNotes = notes.filter((note) => note.title === title)
  
  if (dulicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const getAll = () => {
  const notes = fetchNotes()
  if (notes) {
    log(hl('Notes'))
    log(hl('- - - - - - - - -'))
    notes.map((note) => {
      log(`- Title: ${note.title}`)
      log(`- Body: ${note.body}`)
      log('- - - - - -')
    })
    log(`Total notes: ${notes.length}`)
    log(hl('- - - - - - - - -'))
  } else {
    log('No notes added yet.')
  }
}
const getNote = (title) => {
  console.log('Reading a note')
}
const removeNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length !== filteredNotes.length
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}