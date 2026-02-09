const foodDB = require('../eateries/food.db')

// Get all Cuisines
const getAllCuisines = (req, res) => {
    res.json(foodDB.length > 0 ? foodDB : { message: "No cuisines found in the database." })
    console.log(`${foodDB.length} cuisines available.  `)
}

// Get single Cuisines
const getSingleCuisine = (req, res) => {
    const postId = req.params.id
    const post = foodDB.find(cuisine => cuisine.id === parseInt(postId))
    if (!post) {
        return res.status(404).json({ message: 'Cuisine not found' })
    }
    res.json(post)
}

/**
 * POST /api/restaurants
 * Logic: Handles creating a restaurant AND its menu in one go.
 */
const createCuisine = (req, res) => {
    // 1. Destructure the combined fields
    const { restaurant, cuisine, category, description, location } = req.body;

    // 2. Simple Validation
    if (!restaurant || !cuisine) {
        return res.status(400).json({ message: "Required: restaurant and cuisine." });
    }

    // 3. Create the new record
    const newEntry = {
        id: foodDB.length + 1, // Simple ID generation
        restaurant,
        cuisine,
        category,
        description,
        location
    };

    // 4. Update the in-memory array
    foodDB.push(newEntry);

    // 5. Success Response
    res.status(201).json({
        message: "Restaurant added to memory!",
        data: newEntry
    });
}
/**
 * PUT /api/restaurants/:id
 * Description: Updates an existing restaurant by ID
 */
const updateCuisine = (req, res) => {
    // 1. Grab the ID from the URL and the data from the body
    const id = parseInt(req.params.id);
    const { restaurant, cuisine, category, description, price, location } = req.body;

    // 2. Find the index of the item in your mock database
    const index = foodDB.findIndex(item => item.id === id);

    // 3. If it doesn't exist, return a 404
    if (index === -1) {
        return res.status(404).json({ message: `Restaurant with ID ${id} not found.` });
    }

    // 4. Update the record
    // We use the spread operator to keep the original ID but overwrite other fields
    const updatedEntry = {
        ...foodDB[index],
        restaurant: restaurant || foodDb[index].restaurant,
        cuisine: cuisine || foodDb[index].cuisine,
        category: category || foodDb[index].category,
        description: description || foodDb[index].description,
        price: price || foodDb[index].price,
        location: location || foodDb[index].location
    };

    foodDB[index] = updatedEntry;

    // 5. Return the updated object
    res.json({
        message: "Entry updated successfully!",
        data: updatedEntry
    });
}

/**
 * DELETE /api/restaurants/:id
 * Description: Removes a restaurant from the mock database
 */
const deleteCuisine = (req, res) => {
    // 1. Grab the ID from the URL
    const id = parseInt(req.params.id);

    // 2. Check if the item actually exists first
    const itemExists = foodDB.find(item => item.id === id);

    if (!itemExists) {
        return res.status(404).json({
            message: `Delete failed: Restaurant with ID ${id} not found.`
        });
    }

    // 3. Re-assign foodDb to a version of itself WITHOUT that ID
    // Note: This only works if foodDb is defined with 'let' (not 'const')
    // If it's a const, you would use foodDb.splice(index, 1) instead
    const index = foodDB.findIndex(item => item.id === id);
    foodDB.splice(index, 1);

    // 4. Return confirmation
    res.json({
        message: `Restaurant with ID ${id} has been deleted.`,
        deletedItem: itemExists
    });
}

/**
 * GET /api/restaurants
 * Logic: Returns all restaurants OR filters them based on query parameters
 */
const getRestaurants = (req, res) => {

    console.log('Incoming Queries:', req.query);
    // Example: /api/restaurants?cuisine=Mexican&location=Downtown
    const { restaurant, category, location } = req.query;
    // 1. Grab query parameters from the URL
    let results = [...foodDB]; // Start with a copy of the full list

    // 2. Filter by category (Case-insensitive)
    if (category) {
        results = results.filter(r =>
            r.category.toLowerCase() === category.toLowerCase()
        );
    }

    // 3. Filter by restaurant (Partial match / "Search" functionality)
    if (restaurant) {
        results = results.filter(r =>
            r.restaurant.toLowerCase().includes(restaurant.toLowerCase())
        );
    }

    // 4. Filter by Location
    if (location) {
        results = results.filter(r =>
            r.location.toLowerCase() === location.toLowerCase()
        );
    }

    // 5. Return the filtered (or full) list
    res.json(results);
}

module.exports = {
    getAllCuisines,
    getSingleCuisine,
    createCuisine,
    updateCuisine,
    deleteCuisine,
    getRestaurants
}