/*import {Dish} from "./Dish"
import {ingredientType} from "./Ingredient"
//import * as inquirer from 'inquirer';*/

export class Menu {
    name: string;

    /**
     * Contructor del Menú
     * @param name nombre del menú
     * @param menuPrice precio del menú
     * @param dishes platos que componen el menú
     * @function calculateMenuPrice() calcular precio del menu
     */
    constructor(name: string = "") {
        this.name = name;
    }

    /**
     * @returns name, nombre del menu
     */
    getName(): string{
        return this.name;
    }

   
    /**
     * Cambia el nombre del menú
     * @param newName Nuevo nombre del menú
    */
    setName(newName: string): void {
        this.name = newName;
    }
}