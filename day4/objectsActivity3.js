
//my code
const coffeeShop = { //object

    name: "Tim Hortons",

    branch: "Wilmslow Park, Unit 7 Wilmslow Rd",

    OrderType: ["Eat in","Takeout"],

    drinks: [["Dark Roast Coffee", 2.29], //multi array1 drinks and price
            ["Latte", 3.19],
            ["Hot Chocolate", 3.49]],

    foods: [["Crispy Chicken Wrap Meal", 7.99],//multi array2 food and price
            ["Tims Classic Burger Meal", 8.49],
            ["Tuna Melt Meal", 7.49]],

        drinksTotalOrdered (item, price){ //method 1
            return this.drinks [item][price];
        },
        foodTotalOrdered (item, price){ //method 2
            return this.foods[item][price];
        },
        TotalOrder (){
            return this.drinksTotalOrdered(0,1) + this.drinksTotalOrdered(1,1) + this.drinksTotalOrdered(1,1) + this.foodTotalOrdered(0,1) + this.foodTotalOrdered(2,1)
    }
   
};



console.log(`\n${coffeeShop.name} \n\n${coffeeShop.branch}\n
${coffeeShop.OrderType[1]}\n
Your Order is:\n1 x ${coffeeShop.drinksTotalOrdered(0,0)} £${coffeeShop.drinksTotalOrdered(0,1)}
2 x ${coffeeShop.drinksTotalOrdered(1,0)} £${coffeeShop.drinksTotalOrdered(1,1)}
1 x ${coffeeShop.foodTotalOrdered(0,0)} £${coffeeShop.foodTotalOrdered(0,1)}
1 x ${coffeeShop.foodTotalOrdered(2,0)} £${coffeeShop.foodTotalOrdered(2,1)}\n\n
Grand Total: £${coffeeShop.TotalOrder}`)



// Brett example
// const coffeeShop = {
//     branch: "McDonalds Branch № 1024",
//     drinks: [
//         ["Coke Med", 1.50],
//         ["Coke Lrg", 2.00],
//         ["Sprite Med", 1.35],
//         ["Sprite Lrg", 1.80],
//         ["Oasis Med", 1.15],
//         ["Oasis Lrg", 1.65]
//     ],
//     food: [
//         ["Chicken Nuggets", 2.80],
//         ["Cheese Burger", 2.00],
//         ["Mc Flurry", 1.20],
//         ["Fries Med", 1.00],
//         ["Fries Lrg", 1.40],
//         ["Apple Pie", 1.00]
//     ],
//     getOrder (){
//         drink = this.drinks[Math.floor(Math.random() * this.drinks.length)];
//         drinkIndex = this.drinks.indexOf(drink);
//         actualDrink = this.drinks[drinkIndex][0];
//         drinkPrice = this.drinks[drinkIndex][1];
//         food = this.food[Math.floor(Math.random() * this.food.length)];
//         foodIndex = this.food.indexOf(food);
//         actualFood = this.food[foodIndex][0];
//         foodPrice = this.food[foodIndex][1];
//         total = drinkPrice + foodPrice;
//         total = (Math.round(total * 100) / 100).toFixed(2);
//         drinkPrice = (Math.round(drinkPrice * 100) / 100).toFixed(2);
//         foodPrice = (Math.round(foodPrice * 100) / 100).toFixed(2);
//         console.log(`\n${this.branch}\nYour order:\n\n${actualDrink} - £${drinkPrice}\n${actualFood} - £${foodPrice}\n\nTotal: £${total}`);
//     }
// };

// coffeeShop.getOrder();