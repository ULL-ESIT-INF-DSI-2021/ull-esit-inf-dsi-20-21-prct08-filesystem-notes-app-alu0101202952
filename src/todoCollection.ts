import { TodoItem } from "./todoItem";
export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();
    constructor(public userName: string, todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addTodo(title: string, task: string): number {
        if(this.itemMap.has(parseInt(title))){
            console.log(`Tarea ya incluída`)
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

    getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()]
            .filter(item => includeComplete || !item.complete);
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
}