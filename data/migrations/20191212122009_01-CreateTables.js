
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
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