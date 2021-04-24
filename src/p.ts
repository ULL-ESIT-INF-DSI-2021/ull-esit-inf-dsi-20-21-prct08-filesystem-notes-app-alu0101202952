import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import {watchFile} from 'fs';
import {writeFile} from 'fs';

let todos: TodoItem[] = [
    new TodoItem(1, "BuyFlowers.txt", "Buy 8 flowers to Saul"), new TodoItem(2, "Get Shoes", "Go shopping at 6.00"),
    new TodoItem(3, "Collect Tickets", "Go to the cinema to collect"), new TodoItem(4, "Call Joe", "And ask some questions about the next math exam", true)];
let collection: TodoCollection = new TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);

//collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());


writeFile('helloworld.txt', 'Hello World!', (err) => {
  if (err) {
    console.log('Something went wrong when writing your file');
  } else {
    console.log('File helloworld.txt has just been created');
  }
});

watchFile('BuyFlowers.txt', (curr, prev) => {
  console.log(`File size was ${prev.size} bytes before it was modified`);
  console.log(`Now file size is ${curr.size} bytes`);
});