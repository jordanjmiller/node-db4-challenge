
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredientsList').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredientsList').insert([
        {recipe_id: 1, ingredient_id: 1},
        {recipe_id: 1, ingredient_id: 2},
        {recipe_id: 1, ingredient_id: 3},
        {recipe_id: 1, ingredient_id: 4},
      ]);
    });
};
