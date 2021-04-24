import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import {watchFile} from 'fs';
import {readFile} from 'fs';
import * as yargs from 'yargs';

const chalk = require('chalk');

let todos: TodoItem[] = [];
let collection: TodoCollection = new TodoCollection("Adam", todos);


yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Note user',
      demandOption: true,
      type: 'number',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'number' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      console.clear();
      console.log(`${argv.user}'s Todo List: added task`);

      let userNotes = collection.loadTodo(argv.user);
      let color = collection.getTodoColor(argv.color);
      if (color) {
        userNotes.push(new TodoItem(argv.user, argv.title, argv.body, argv.color));
        collection.saveTodo(userNotes, argv.user.toString());
      } else {
        console.log('Invalid color');
        console.log('Admited colors: Red, Blue, Green, Yellow, Black');
      }
        
    }
  },
});


yargs.command({
  command: 'modify',
  describe: 'Modify an exist note',
  builder: {
    user: {
      describe: 'Note user',
      demandOption: true,
      type: 'number',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'number' && typeof argv.title === 'string' && typeof argv.body === 'string' && typeof argv.color === 'string') {
      console.clear();
      console.log(`${argv.user}'s Todo List: modified task`);
      watchFile('BuyFlowers.txt', (curr, prev) => {
        console.log(chalk.green(`File size was ${prev.size} bytes before it was modified`));
        console.log(chalk.green(`Now file size is ${curr.size} bytes`));
      });
    }
  },
});


yargs.command({
  command: 'remove',
  describe: 'Remove a complete note',
  builder: {
    user: {
      describe: 'Note user',
      demandOption: true,
      type: 'number',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'number' && typeof argv.title === 'string') {
      console.clear();
      console.log(`${argv.user}'s Todo List: remove task`);
      collection.removeComplete();
    }
  },
});


yargs.command({
  command: 'list',
  describe: 'List notes',
  builder: {
    user: {
      describe: 'Note user',
      demandOption: true,
      type: 'number',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'number') {
      console.clear();
      console.log(`${argv.user}'s Todo List`);
      let task = collection.loadTodo(argv.user);
      console.log('Listing tasks for user ' + argv.user + '...\n');
      for (const note of task) {
        console.log(note.getTitle() + ' ');
      }
    } else {
    console.log('Error');
    }
  },
});

yargs.command({
  command: 'read',
  describe: 'Read an existing note',
  builder: {
    user: {
      describe: 'Notes owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string' && typeof argv.user === 'string') {
      readFile(`${argv.title}`, (error,datos) => {
        if (error)
          console.log(error);
        else
          console.log(datos.toString());
      }); 
    }
  },
});

yargs.parse();
