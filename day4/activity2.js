
//Edit the below snippet to include two parameters and a
//running order count updated when the function is called:


let orderCount = 0;

const takeOrder = (topping, topping2) => {
   
    orderCount++;
    console.log(`Order no: ${orderCount}`);
    console.log(`Pizza with ${topping}, ${topping2}`);
    console.log("");
}

takeOrder("Pineapple", "Beef");
takeOrder("Ham", "Pepperoni");
takeOrder("Chicken", "Lamb");
