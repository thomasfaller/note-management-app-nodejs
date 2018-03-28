# NodeJs Note-management app

This is a server-side application built with NodeJs to add/remove notes.

## Setup

### Adding a note

To add a note you can type **node app.js add --title=*<title of my note>* --body=*<content of my note>***:

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
$ node app.js add --title="This is a note"
```



