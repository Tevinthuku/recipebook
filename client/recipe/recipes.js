Meteor.subscribe('recipes');

Template.recipes.helpers({
   recipe: ()=>{return Recipes.find({});
   } 
});