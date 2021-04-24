import { join } from "path"; 
import { TodoItem } from "./todoItem";
const chalk = require('chalk');
export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();
    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    setUsername(user: string){
        this.userName = user;
    }

    getUsername(){
        return this.userName;
    }

    addTodo(title: string, task: string, color:string): number {
        if(this.itemMap.has(parseInt(title))){
            console.log(chalk.red(`Error, Tarea ya incluída`))
        } else{
            while (this.getTodoById(this.nextId)) {
                this.nextId++;
            }
            this.itemMap.set(this.nextId, new TodoItem(this.nextId, title, task, color));
        }
        return this.nextId;
    }

    getTodoById(id: number) : TodoItem | undefined {
        return this.itemMap.get(id);
    }

    getTodoItems(title: string): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(item => title || !item.getTask());
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

    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.getTitle()) {
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
            tasks.push(new TodoItem(contentObject.id, contentObject.title, contentObject.text, contentObject.color));
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