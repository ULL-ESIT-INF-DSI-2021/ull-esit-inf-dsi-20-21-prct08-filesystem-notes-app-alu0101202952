export class TodoItem {
    constructor(public id: number, public title: string, public task: string, public complete: boolean = false) {}

    getId() {
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getTask() {
        return this.task;
    }

    printDetails() : void {
        console.log(`${this.id} ${this.title}: ${this.complete
            ? "  (complete)": ""} \n Description: ${this.task} \n`);
    }

   
}