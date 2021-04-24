export class TodoItem {
    constructor(public id: number, public title: string, public task: string, public color:string) {}

    getId() {
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getTask() {
        return this.task;
    }

    getColor(){
        return this.color;
    }

    setId(newId: number) {
        this.id = newId;
    }

    setTitle(newTitle: string){
        this.title=newTitle;
    }

    setTask(newTask: string) {
        this.task=newTask;
    }

    setColor(newColor:string){
        this.color=newColor;
    }


    printDetails() : void {
        console.log(`${this.id} ${this.title}:\n Description: ${this.task} \n`);
    }

   
}