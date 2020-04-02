let array = ["Josh", "F", "Allen"];

let object = {
  title: "All-Pro",
  occupation: "Quarterback"
};

function greetings(array, object) {
  console.log(
    `Hello, ${array.join(" ")}! Nice to have an ${object.title} ${
      object.occupation
    } around.`
  );
}

greetings(array, object);
