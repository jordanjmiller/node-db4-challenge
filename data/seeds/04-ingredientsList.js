
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientsList').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsList').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 2},
        {recipe_id: 1, ingredient_id: 2, quantity: 5},
        {recipe_id: 1, ingredient_id: 3, quantity: 8},
        {recipe_id: 1, ingredient_id: 4, quantity: 8},
      ]);
    });
};
