import { join } from "path"; 
import { TodoItem } from "./todoItem";
const chalk = require('chalk');
export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();
    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    setUsename(user: string){
        this.userName = user;
    }

    getUsename(){
        return this.userName;
    }

    addTodo(title: string, task: string): number {
        if(this.itemMap.has(parseInt(title))){
            console.log(chalk.red(`Error, Tarea ya incluída`))
        } else{
            while (this.getTodoById(this.nextId)) {
                this.nextId++;
            }
            this.itemMap.set(this.nextId, new TodoItem(this.nextId, title, task));
        }
        return this.nextId;
    }

    getTodoById(id: number) : TodoItem | undefined {
        return this.itemMap.get(id);
    }

    getTodoItems(title: string): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(item => title || !item.complete);
    }

    getTodoColor(color: string){
        switch(color) {
            case 'red':
            return chalk.red;
            
            case 'blue':
            return chalk.blue;
        
            case 'green':
            return chalk.green;
        
            case 'yellow':
            return chalk.yellow;
        
            default:
            return false;
        }
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        })
    }

    loadTodo(user: number) {
        const dirPath = `./${user}`; //join('.', user.toString())
        const tasks: TodoItem[] = [];
        let fs = require("fs");
        if (fs.existsSync(dirPath)) {
          // Nombres de los ficheros bajo ese directorio
          const fileNames = fs.readdirSync(dirPath);
          for (const file of fileNames) {
            let fileContent: Buffer = fs.readFileSync(join(dirPath, file));
            // String en formato JSON y lo convierte en un objeto
            let contentObject = JSON.parse(fileContent.toString());
            //Actua como un diccionario, leemos cada atributo y la información que tiene y la extraemos
            tasks.push(new TodoItem(contentObject.title, contentObject.color, contentObject.text));
          }
        }
        return tasks;
      }

    saveTodo(tasks: TodoItem[], user: string) {
        let fs = require("fs");
        const dir = `./${user}`;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
          
        for (const task of tasks) {
          let fileName = task.getTitle() + '.json';
          fileName = join(dir, fileName);
          //Coge un objeto y la convierte a formato JSON
          fs.writeFileSync(fileName, JSON.stringify(task));
        }
    }
}