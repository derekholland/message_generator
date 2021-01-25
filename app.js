//This program generates a random inspirational message for the user every time it runs

let quotes = [
  'Success usually comes to those who are too busy to be looking for it', 'Successful people do what unsuccessful people are not willing to do.', "Don't wish it were easier; wish you were better.", "The ones who are crazy enough to think they can change the world, are the ones that do", "The successful warrior is the average man, with laser-like focus.", "Many of life's failures are people who did not realize how close they were to success when they gave up.", "The only way it gets better for you is when you get better. Better is not something you wish, it’s something you become", "All leaders are readers", "Don’t wish it was easier, wish you were better. Don’t wish for less problems, wish for more skills. Don’t wish for less challenges, wish for more wisdom","Learn how to be happy with what you have while you pursue all that you want","Everyone must choose one of two pains: The pain of discipline or the pain of regret"
]

let books = ['The Power of Now', 'The 7 Habits of Highly Effective People', 'Limitless', 'Think and Grow Rich', 'The Secret', 'Maximum Acheivement','How to Win Friends & Influence People', 'Awaken the Giant Within', 'Man\'s Search for Meaning, The Code of the Extraordinary Mind']

let habits = ['exercise everyday', 'read everyday', 'eat healthier meals', 'learn something new everyday', 'learn a new skill','meditate','journal', 'write about what you are thankful for', 'do something that scares you everyday','create SMART goals', 'improve time management', 'increase productivity' ]
//create the variables to store the random pieces of the message 
let randomQuoteIndex = Math.floor(Math.random() * quotes.length)
let randomBookIndex = Math.floor(Math.random() * books.length)
let randomHabitIndex = Math.floor(Math.random() * habits.length)
let randomQuote = quotes[randomQuoteIndex]
let randomBook = books[randomBookIndex]
let randomHabit = habits[randomHabitIndex]
//Print the message to the console
console.log(`Your inspirational quote is: ${randomQuote}`)
console.log(`A great book you can read is: ${randomBook}`)
console.log(`A succes building habit is: ${randomHabit}`)
