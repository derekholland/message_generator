//This program generates a random inspirational message for the user every time it runs

let randomMessages = [
  'Success usually comes to those who are too busy to be looking for it', 'Successful people do what unsuccessful people are not willing to do.', "Don't wish it were easier; wish you were better."
]

// console.log(randomMessages[2]);

//generate a random number between the indexes of the array 0 - array.length
// console.log(randomMessages.length - 1)
let randomIndex = Math.floor(Math.random() * randomMessages.length)
console.log(randomIndex); 