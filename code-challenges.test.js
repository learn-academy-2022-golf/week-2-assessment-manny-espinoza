// ASSESSMENT 2: Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.
// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
    // Begin with the describe() statement. Takes as an argument the function name (divBy3) in a string. Follow with anonymous function syntax.
    // Create the it() statement. Takes as an argument a string that describes what the function divBy3 should do. Follow with anonymous function syntax.
    // Per set of provided variables (object1 & output1 / object 2 & output 2 / object3 & output3) we write an expect() statement. The parameters of each expect statement is the function name (divBy3) that takes in the relative provided variables (first expect takes in divBy3(object1) and so on) as the argument. expect() statements are appended with the .toEqual() methods that take as their argument strings explaining what the expected output should be (output1/2/3).
    // Describe statement is completed.
    // Run $ yarn jest. Should see an error code; we want it to say "Reference Error: divBy3 is not defined"
describe("divBy3", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        const output1 = "15 is divisible by three"
        expect(divBy3(object1)).toEqual(output1)
        const object2 = { number: 0 }
        const output2 = "0 is divisible by three"
        expect(divBy3(object2)).toEqual(output2)
        const object3 = { number: -7 }
        const output3 = "-7 is not divisible by three"
        expect(divBy3(object3)).toEqual(output3)
    })
})
// $ yarn jest (results)
    // ReferenceError: divBy3 is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total
    // Good error!
// b) Create the function that makes the test pass.
// Pseudocode
    // Create divBy3 function with const keyword.
    // Within the anonymous function syntax, input object as the parameters. This acts as the placeholder for the actual variable.
    // Within the code block, create a conditional that checks if a number is evenly divisible by three or not, and return respective outputs.
    // Run $ yarn jest. Should see a passing test.
const divBy3 = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else if (object.number % 3 !== 0) {
        return `${object.number} is not divisible by three`
    }
}
// $ yarn jest (results)
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Pass!



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
    // Begin with describe() statement. Takes in as it's argument the function name (capitalizer) as a string followed by anonymous function syntax.
    // Write the it() statement. Takes in as it's argument a string that describes the function's purpose. Follow up with anonymous function syntax.
    // Write expect() statements per set of provided variables (randomNouns). expect() statements take in as their arguments the function name (capitalizer), and within the function name parameters we provide the given variables. Append with .toEqual() method that takes as its argument the expected outputs (nounsOutput1/2).
    // Describe statement is completed.
    // Run $ yarn jest. Should see "ReferenceError: capitalizer is not defined"
describe("capitalizer", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const nounsOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        expect(capitalizer(randomNouns1)).toEqual(nounsOutput1)
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        const nounsOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(capitalizer(randomNouns2)).toEqual(nounsOutput2)
    })
})
// $ yarn jest (results)
    // ReferenceError: capitalizer is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 passed, 2 total
        // 1 passed test from first problem
    // Good error!
// b) Create the function that makes the test pass.
// Pseudocode
    // Create the function "capitalizer" that takes in an array as its parameter.
    // Within the function code block, we want to .map() over whatever array is passed into the function, and capitalize only the first character of each item in that array. We can't simply call .toUpperCase() on the entire array as this would capitalize every single letter.
        // To do this we must first select the character at the 0th index and capitalize just that with .toUpperCase(). Next, we want to slice the same value starting with the 1st index, and use the .toLowerCase() method. We join these two together and get an array of words that have their first character capitalized and the rest of the characters in lowercase.
const capitalizer = (array) => {
    return array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    })
}
// $ yarn jest (results)
    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total
        // 2 passes for the 2 problems so far
    // Pass!



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
    // Begin with describe() keyword. Takes in as its parameter the function name (vowelFinder) as a string, followed with anonymous function syntax.
    // Write it() statement that takes in as its parameter a descriptive string of what the function should do. Follow with anonymous function syntax.
    // Write an expect statement per set of provided variables. Argument is the function (vowelFinder) that takes as its parameters the respective variables (vowelTester1/2/3). Append with .toEqual() method that takes as its argument the expected outcome per set of variables (vowelOutput1/2/3).
    // Describe statement completed.
    // Run $ yarn jest. Should see "ReferenceError: vowelFinder is not defined"
describe("vowelFinder", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelOutput1 = 1
        expect(vowelFinder(vowelTester1)).toEqual(vowelOutput1)
        const vowelTester2 = "academy"
        const vowelOutput2 = 0
        expect(vowelFinder(vowelTester2)).toEqual(vowelOutput2)
        const vowelTester3 = "challenges"
        const vowelOutput3 = 2
        expect(vowelFinder(vowelTester3)).toEqual(vowelOutput3)
    })
})
// $ yarn jest (results)
    // ReferenceError: vowelFinder is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 2 passed, 3 total
        // 2 passed from first two problems
    // Good error!
// b) Create the function that makes the test pass.
// Can't seem to figure out what function to write to make the test pass. Here are my attempts.

// const vowelFinder = (string) => {
//     let vowels = ['a' || 'e' || 'i' || 'o' || 'u']
//     return string.indexOf(vowels)
// }

// const vowelFinder = (string) => {
//     return string.indexOf('a' || 'e' || 'i' || 'o' || 'u')
// }

// const vowelFinder = (string) => {
//     return string.search('a' || 'e' || 'i' || 'o' || 'u')
// }

// const vowelFinder = (string) => {
//     let vowels = ['a' || 'e' || 'i' || 'o' || 'u']
//     return string.search(vowels)
// }