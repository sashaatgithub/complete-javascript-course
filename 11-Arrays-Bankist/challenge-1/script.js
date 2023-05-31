"use strict";
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

  // dogs
  // .map(dog => {
  //   let recommendedFood = dog.weight*0.75*28;
  //   return dog.recommendedFood}) 
  // returns new array;
  dogs
  .forEach(dog => 
      (dog.recommendedFood = dog.weight*0.75*28));
      console.log(dogs);

    function recommendation(dog){
      if(dog.curFood < (dog.recommendedFood * 0.9))return "Feed more"
      else if(dog.curFood < (dog.recommendedFood * 1.1)) return "Change nothing"
      else return "Feed less";
    }

    dogs
    // .filter(dog => dog.owners.includes('Sarah'))
    .forEach(dog => dog.recommendation = recommendation(dog));
    console.log(dogs);
    
    

    
      