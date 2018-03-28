# NodeJs Note-management app ![version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

This is a server-side application built with NodeJs to add/remove notes. I used [Lodash](https://lodash.com/), [Yargs](http://yargs.js.org/) and [Chalk](https://github.com/chalk/chalk) to enhance functionnalities.

## Setup

type **npm install** to install all needed dependencies

```
$ npm install
```

### Adding a note

To add a note you can type **node app.js add --title=*<title of my note>* --body=*<content of my note>***

```
$ node app.js add --title="This is a note" --body="This is the content of my note"
```

the following output will be logged into the console:

```
Starting app.js...
- Starting notes.js...
New note added!
---
Title: This is a note
Body: This is the content of my first note
```

### Removing a note

To delete a note you can type **node app.js remove --title=*<title of my note>***:

```
$ node app.js remove --title="This is a note"
```

the following output will be logged into the console:

```
Starting app.js...
- Starting notes.js...
Note was removed
```

### Displaying a note

To display a note you can type **node app.js read --title=*<title of my note>***:

```
$ node app.js read --title="This is a note"
```

the following output will be logged into the console:

```
Starting app.js...
- Starting notes.js...
Note found
---
Title: This is a note
Body: This is the content of my first note
```

