// ASSESSMENT 2: Coding Conceptual Questions
// Examine the following examples.
// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.



// --------------------1) What will this log?
const cohort = "Golf 2022"
// console.log(cohort.split(""))
// a) Your answer: ['G', 'o', 'l', 'f', ' ', '2', '0', '2', '2']
  // Actual output: [ 'G', 'o', 'l', 'f', ' ', '2', '0', '2', '2']
// b) Verify and explain: Calling the .split() method upon a string will separate the characters of that string and place them as elements in an array.



// --------------------2) What will this log?
const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))
// a) Your answer: Undefined or an error code
  // Actual output: undefined
// b) Verify and explain: I suspected that since there was no return keyword within the code block of the greeter function, trying to log it to the console would render as undefined (I was right, yay!)



// --------------------3) What will this log?
const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)
// a) Your answer: [ 8, 10, 12, 14, 16 ]
  // Actual output: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: Calling .map() upon an array will iterate through each item in the array and return a new array of the same length. The code (argument within the parentheses of .map()) was telling .map() to iterate through each item in the array and multiply them all by 2.



// --------------------4) What will this log?
const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)
// a) Your answer: [ 11, 13, 15 ]
  // Actual output: [ 11, 13, 15 ]
// b) Verify and explain: Calling .filter() upon an array will tell the program to make decisions about which elements in that array it wants to keep, and then return that new array after the original has been sorted (or filtered) through. The code (argument within the parentheses of .filer()) was telling the program to return only odd numbers (number % 2 !== 0; this has been seen in class many times and we now know that it essentially says that if numbers are not evenly divisible by 2, then that number must be odd).



// --------------------5) What will this log?
const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])
// a) Your answer: JavaScript
  // Actual output: JavaScript
// b) Verify and explain: We console log the result of calling upon the myCodingSkills object, at the language element, at the zeroth index, which holds the string JavaScript.



// --------------------STRETCH: What will this log?
class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)
// a) Your answer: { "George", "Foxtrot", 2022 }
  // Actual output: Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
// b) Verify and explain: Using the new keyword creates a new instance of a class, in this case the class being Learn. We created a new instance of Learn and assigned it to learnStudent. My initial answer missed the exact syntax, and now I know that creating a new instance of a class and then logging it to the console will give the full specifications of that class instance. This includes the class name, and an object containing all the relevant key:value pairs.