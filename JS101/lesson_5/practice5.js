// // Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' },
};
let totalAge = 0;
for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalAge += munsters[member].age;
  }
}

let values = Object.values(munsters);
let totalAge = 0;

values.forEach((member) => {
  if (member.gender === 'male') {
    totalAge += member.age;
  }
});
