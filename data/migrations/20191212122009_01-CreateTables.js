
exports.up = function(knex) {
    return knex.schema
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128)
          .notNullable();
      })
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name', 128)
          .unique()
          .notNullable();
      })
      .createTable('steps', tbl => {
        tbl.increments();
        tbl.string('step_name', 128)
          .notNullable();
        tbl.string('step_details')
        .notNullable();
      })
      .createTable('ingredientsList', tbl => {
        tbl.integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('ingredient_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('ingredients')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.primary(['recipe_id', 'ingredient_id']);
      })
      .createTable('stepsList', tbl => {
        tbl.integer('recipe_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('recipes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('step_id')
          // forces integer to be positive
          .unsigned()
          .notNullable()
          .references('id')
          // this table must exist already
          .inTable('steps')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('step_number')
          .unsigned()
          .notNullable();
        tbl.primary(['recipe_id', 'step_id']);
      })
};

exports.down = function(knex) {
    // drop in the opposite order
    return knex.schema
        .dropTableIfExists('stepsList')
        .dropTableIfExists('ingredientsList')
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};



//recipe-
//id increments
//name notnull

//ingredient-
//id increments
//name notnull unique

//steps-
//id increments
//instruction notnull

//ingredientList-
//recipeID FKEY notNull
//ingredientID FKEY notNull unique?
//ingredientQTY notNull

//stepslist-
//recipeID FKEY notnull
//stepsID FKEY notnull
//stepnumber notnull 