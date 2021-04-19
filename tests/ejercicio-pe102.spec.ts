import "mocha";
import {expect} from 'chai';
import {Menu} from '../src/ejercicio-pe102'


//let egg: Ingredient = new Ingredient("EGG", "SPAIN", "CARNES-HUEVOS-LEGUMBRES", {carbohydrates: 5, proteins: 50, lipids: 25}, 5);
//let potato: Ingredient = new Ingredient("POTATO", "SPAIN", "VERDURAS-HORTALIZAS", {carbohydrates: 45, proteins: 10, lipids: 30}, 1.5);
//let tortilla: Dish = new Dish("TORTILLA", "SECONDCOURSE", [{ingredient: egg, amountInGrams: 50}, {ingredient: potato, amountInGrams: 200}]);

let menu1: Menu = new Menu("MENU-CHEF"); //, 9, [tortilla, natilla]

describe('Menu initialization tests', () => {
    it('name of each menu', () => {
        expect(menu1.setName("MENU-CHEF"));
        expect(menu1.getName()).to.be.equal("MENU-CHEF");
    });
});