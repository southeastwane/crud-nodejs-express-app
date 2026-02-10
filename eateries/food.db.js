

const foodData = [
    {
        id: 1,
        restaurant: "Juan Pacheco's",
        cuisine: "pollo de crema",
        category: "Mexican",
        description: "chicken in creamy sauce with rice and salad",
        menu: [
            { "id": 1, "item": "Pollo con Mole", "price": 18, "type": "Main" },
            { "id": 2, "item": "Chille Relleno", "price": 16, "type": "Main" }
        ],
        location: "Charlotte , NC"
    },
    {
        id: 2,
        restaurant: "Captain Vernon's Seafood",
        cuisine: "Seafood platter",
        category: "American",
        description: "Fried fish, shrimp, fries, coleslaw",
        menu: [
            { "id": 1, "item": "Flounder", "price": 18, "type": "Main" },
            { "id": 2, "item": "Shrimp and Lobster", "price": 35, "type": "Main" }
        ],
        location: "Sumter , SC"
    },
    {
        id: 3,
        restaurant: "Crepes and Croissants",
        cuisine: "French",
        category: "Casual",
        description: "A cozy spot for crepes and croissants.",
        location: "East Side",
        menu: [
            { "id": 101, "item": "Crepe Suzette", "price": 12, "type": "Dessert" },
            { "id": 102, "item": "Spinach and Cheese Croissant", "price": 8, "type": "Breakfast" }
        ]
    }

]

module.exports = foodData