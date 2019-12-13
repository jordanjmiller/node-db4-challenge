
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_name: 'Add Bread', step_details: 'Get two pieces of bread out'},
        {id: 2, step_name: 'Butter bread', step_details: 'Butter both sides of each piece of bread'},
        {id: 3, step_name: 'Add cheese', step_details: '8 slices should do. Place between bread.'},
        {id: 4, step_name: 'Add ham', step_details: '8 slices should do. Place between bread.'},
        {id: 5, step_name: 'Toast Bread', step_details: 'Toast both sides until golden brown and cheese is melted'},
        {id: 6, step_name: 'Enjoy', step_details: 'Put it in your mouth, you earned it'},
      ]);
    });
};
