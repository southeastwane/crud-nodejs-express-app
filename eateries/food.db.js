

const foodData = [
    {
        id: 1,
        restaurant: "Juan Pacheco's",
        cuisine: "Latin Dishes",
        category: "Mexican",
        description: "chicken in creamy sauce with rice and salad",
        menu: [
            { "id": 1, "item": "Pollo con Mole", "price": 18, "type": "Dinner" },
            { "id": 2, "item": "Chille Relleno", "price": 16, "type": "Dinner" }
        ],
        location: "Charlotte , NC"
    },
    {
        id: 2,
        restaurant: "Captain Vernon's Seafood",
        cuisine: "Seafood",
        category: "American",
        description: "Fried fish, shrimp, fries, coleslaw",
        menu: [
            { "id": 1, "item": "Flounder and Shrimp", "price": 18, "type": "Dinner" },
            { "id": 2, "item": "Shrimp and Lobster", "price": 35, "type": "Dinner" }
        ],
        location: "Sumter , SC"
    },
    {
        id: 3,
        restaurant: "Crepes and Croissants",
        cuisine: "French Bakery",
        category: "Casual",
        description: "A cozy spot for crepes and croissants.",
        location: "Butner , NC",
        menu: [
            { "id": 101, "item": "Crepe Suzette", "price": 12, "type": "Dessert" },
            { "id": 102, "item": "Spinach and Cheese Croissant", "price": 8, "type": "Breakfast" },
            { "id": 103, "item": "Egg and Cheese Croissant", "price": 8, "type": "Breakfast" }
        ]
    }

]

module.exports = foodData