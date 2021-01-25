//This program generates a random inspirational message for the user every time it runs

let randomMessages = [
  'Success usually comes to those who are too busy to be looking for it', 'Successful people do what unsuccessful people are not willing to do.', "Don't wish it were easier; wish you were better.", "The ones who are crazy enough to think they can change the world, are the ones that do", "The successful warrior is the average man, with laser-like focus.", "Many of life's failures are people who did not realize how close they were to success when they gave up.", "The only way it gets better for you is when you get better. Better is not something you wish, it’s something you become", "All leaders are readers", "Don’t wish it was easier, wish you were better. Don’t wish for less problems, wish for more skills. Don’t wish for less challenges, wish for more wisdom","Learn how to be happy with what you have while you pursue all that you want","Everyone must choose one of two pains: The pain of discipline or the pain of regret"
]

//generate a random number between the indexes of the array 0 - array.length
let randomIndex = Math.floor(Math.random() * randomMessages.length)
let randomQuote = randomMessages[randomIndex]
console.log(randomQuote)