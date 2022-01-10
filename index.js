let emptyArray = [];
let hobbies = ["Travelling", "codeing", "eating", "reading",  "Shopping", "sleeping"];
let numbers = [1, 2, 3, 4, 5];

console.log(`The second number from the array numbers --> ${numbers[1]}`);
console.log(`The last hobby from the array hobbies --> ${hobbies[hobbies.length-1]}`);

hobbies.push("Fake Hobbie");


console.log(`After adding a fake hobbies, NOW the last hobby from the array hobbies --> ${hobbies[hobbies.length-1]}`);

console.log(`Print the length of array hobbies --> ${hobbies.length}`);

hobbies.pop();
hobbies.pop();
console.log(`After removing the last two elements, the length of array hobbies --> ${hobbies.length}`);

console.log(hobbies);

hobbies = [];

console.log(hobbies);



