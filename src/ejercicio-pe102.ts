/*import {Dish} from "./Dish"
import {ingredientType} from "./Ingredient"
//import * as inquirer from 'inquirer';*/


/**
 * Type que tiene el array que entra con el que operaremos y la función reduce()
 */
type Operation = {
    arrayIn: number [];
    reduce: () => void;
}

/**
 * CLASS REDUCE
 * @class Reduce es la padre que realizará la reducciones
 */
export abstract class Reduce {
    protected array: Operation[]
    /**
     * Contructor de la Reduce
     */
    constructor(protected num1: number,
        protected num2: number) {
            this.array = [];
    }

    /**
     * Getter que devuelve el valor acumulador
     * @returns num1 que es acumulador
     */ 
    getNum1(){
        return this.num1
    }

    /**
     * Getter que devuelve el valor actual
     * @returns num2 que es valor actual
     */ 
    getNum2(){
        return this.num2
    }

    /**
     * Método que irá reduciendo, cogiendo cada elemento del array
     */
    /*public reduce(){
        this.arrayIn.forEach(element => {
           this.arrayIn.push(element); 
        });
    }*/

    /**
     * Método de plantilla
     */
    protected run(){
        this.evalValues();
    }

    protected evalValues(){
        console.log('Template eval function');
        this.arrayIn.forEach(element => {
            element.reduce()
        });
    }

    protected abstract addReduce(): void;
    protected abstract subReduce(): void;
    protected abstract prodReduce(): void;
    protected abstract divReduce(): void;
    


}
class AddReduce extends Reduce {
    /**
     * Contructor de la AddReduce class
     */
    constructor(protected accum: number, protected current: number) {
       
    }
    // Operación addReduce
    protected addReduce(): void{

    }

}
    

class SubReduce extends Reduce {
    

    /**
     * Método protegido que realiza la resta del reduce
     * 
     */
    protected subReduce(){

    }
}

class ProdReduce extends Reduce {
    /**
     /**
     * Método protegido que realiza el producto del reduce
     * 
     */
    protected prodReduce(){
        
    }
}


class DivReduce extends Reduce {
    /**
     /**
     * Método protegido que realiza la división del reduce
     * 
     */
    protected divReduce(){
        
    }

}