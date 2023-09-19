// let age = 18;
// let voterights = age >= 18 ? true : false;
// if (voterights) {
//     console.log("go for vote");
// } else {
//     console.log("Not allowed");
// }

// dotransition = () => {
//     document.getElementById("myid").style.cssText = width: '500px';
//     height: '500px';

// }


// function one() {
//     console.log("This is the first func");
// }

// function two(on) {
//     // three();
//     on();

//     function three() {
//         console.log("Func three")
//         return three
//     }
// }
// two(one)()
let foodData = [{
        id: 1,
        foodname: "Apple",
        calorie: 95,
        category: "Fruit",
        protiens: 0.3,
        cab: 25,
    },
    {
        id: 2,
        foodname: "Banana",
        calorie: 105,
        category: "Fruit",
        protiens: 1.3,
        cab: 27,
    },
    {
        id: 3,
        foodname: "Orange",
        calorie: 62,
        category: "Fruit",
        protiens: 1.2,
        cab: 15,
    },
    {
        id: 4,
        foodname: "Pear",
        calorie: 95,
        category: "Fruit",
        protiens: 0.5,
        cab: 25,
    },
    {
        id: 5,
        foodname: "Grapefruit",
        calorie: 42,
        category: "Fruit",
        protiens: 1.1,
        cab: 11,
    },
    {
        id: 6,
        foodname: "Strawberry",
        calorie: 46,
        category: "Fruit",
        protiens: 1.5,
        cab: 10,
    },
    {
        id: 7,
        foodname: "Blueberry",
        calorie: 52,
        category: "Fruit",
        protiens: 1.1,
        cab: 14,
    },
    {
        id: 8,
        foodname: "Raspberry",
        calorie: 52,
        category: "Fruit",
        protiens: 1.4,
        cab: 15,
    },
    {
        id: 9,
        foodname: "Broccoli",
        calorie: 34,
        category: "Vegetable",
        protiens: 3.3,
        cab: 5,
    },
    {
        id: 10,
        foodname: "Cauliflower",
        calorie: 25,
        category: "Vegetable",
        protiens: 2.6,
        cab: 5,
    },
    {
        id: 11,
        foodname: "Green Beans",
        calorie: 31,
        category: "Vegetable",
        protiens: 2.4,
        cab: 4,
    },
    {
        id: 12,
        foodname: "Asparagus",
        calorie: 20,
        category: "Vegetable",
        protiens: 2.2,
        cab: 2,
    },
    {
        id: 13,
        foodname: "Spinach",
        calorie: 23,
        category: "Vegetable",
        protiens: 3.5,
        cab: 4,
    },
    {
        id: 14,
        foodname: "Kale",
        calorie: 33,
        category: "Vegetable",
        protiens: 4.3,
        cab: 7,
    },
    {
        id: 15,
        foodname: "Sweet Potato",
        calorie: 103,
        category: "Vegetable",
        protiens: 2,
        cab: 27,
    },
    {
        id: 16,
        foodname: "Potato",
        calorie: 161,
        category: "Vegetable",
        protiens: 4.3,
        cab: 37,
    },
    {
        id: 17,
        foodname: "Carrot",
        calorie: 41,
        category: "Vegetable",
        protiens: 0.9,
        cab: 9,
    },
    {
        id: 18,
        foodname: "Onion",
        calorie: 40,
        category: "Vegetable",
        protiens: 1.4,
        cab: 9,
    },
    {
        id: 19,
        foodname: "Egg",
        calorie: 77,
        category: "Protein",
        protiens: 6.3,
        cab: 0.5,
    },
    {
        id: 20,
        foodname: "Chicken Breast",
        calorie: 165,
        category: "Protein",
        protiens: 31,
        cab: 0,
    },
];




function listAllFoodItems() {
    return foodData.map(food => food.foodname);
}
// Function to list food items with category "Vegetable"
function listVegetableItems() {
    return foodData.filter(food => food.category === "Vegetable").map(food => food.foodname);
}

// Function to list food items with category "Fruit"
function listFruitItems() {
    return foodData.filter(food => food.category === "Fruit").map(food => food.foodname);
}

// Function to list food items with category "Protein"
function listProteinItems() {
    return foodData.filter(food => food.category === "Protein").map(food => food.foodname);
}

// Example usage:
console.log("All Food Items:", listAllFoodItems());
console.log("Vegetable Items:", listVegetableItems());
console.log("Fruit Items:", listFruitItems());
console.log("Protein Items:", listProteinItems());




// let modifiedArr = arr.map(function(element) {
//     return element * 3;
// });

// console.log(modifiedArr);