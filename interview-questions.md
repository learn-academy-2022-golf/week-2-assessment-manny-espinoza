# ASSESSMENT 2: Interview Practice Questions
Answer the following questions.
First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.
Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What is the difference between a parameter and an argument?
Your answer: Parameters and arguments are both pieces of information pertaining to functions. They both get placed within the parentheses of the function, but the difference lies in when that happens. When creating the function, we pass into the parentheses some general placeholder known as a parameter. When invoking (actually calling upon) the function, we pass into the parentheses a specific value which is the argument. Essentially, the parameter serves as a placeholder for future arguments and can be thought of as being part of the function's blueprint, while the argument is part of the actual invocation of the function.
Researched answer: The creation of a function and the actual invocation of a function are different things that should themselves be clarified to help explain the difference between parameters and arguments. Creating a function hard logs the code with all of the work within its code block, whereas the invocation of a function lies within a single line and all that happens is, it gets called (invoked). Parameters are involved with function creation; they are passed into a function's parentheses (during creation process) and tell the function what can or what cannot serve as its variable. Arguments are involved with function invocation; they are passed into the function's parentheses (during invocation) and contain actual data, whereas the parameter merely is a placeholder for that data to be passed in at a later time.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?
Your answer: These parameters are value, index, and (blanking on the third right now). The only required parameter is the value parameter while the other two are optional.
Researched answer: These parameters are value, index, and array. Since .map() is an array method ( .filter() as well ), that third parameter that I missed in my initial answer is the array on which the method is called. Only the value parameter is required, because it stands for the actual data that is getting passed through the method itself. The index and array simply refer to the location of a particular element of an array and so these parameters are just optional.



3. What is the difference between map and filter?
Your answer: The .map() and .filter() methods are both array methods that iterate through each item in an array. .map() iterates through each item in an array and does something (that is specified) to them, and then returns an array of the same length. .filter() iterates through each item in an array and makes a decision about which elements in the array get returned in the new array, based on predetermined filters.
Researched answer: The .map() and .filter() methods are both examples of higher-order functions (in which functions are passed as parameters within other functions). These two HOFs can serve to shorthand code and serve as more common practice in JavaScript. More specifically, they are methods called upon arrays and they both iterate through each item in an array. .map() iterates through each item in an array and does something to it; that something is specified within its parentheses (argument). Finally, .map() returns an array of the same length, where all of the values are updated. .filter() iterates through each item in an array and (based on what argument has been passed into its parentheses) will create a new array with only some values from the original array it was called on.



4. What is iteration?
Your answer: Iteration is the process of repeating any kind of function until a certain condition is met. Iteration can be applied to various things in JavaScript. For example, iteration in a function means that the function will keep on running until a certain condition is met. Iteration in an array however, means that JavaScript will iterate through each individual element in an array and do something (depending on which array method is called).
Researched answer: Iteration is the process by which (either through loops or functions) a certain task is ran over and over again until a specified condition is met, at which point the iteration of said task stops. This task is specified within the parameters of the loop/function. Iteration might be used to run a task a certain number of times and stop once a desired condition becomes true. Iteration also has another meaning pertaining to arrays; iteration with arrays means that each individual element/value in that array is 'looked at' or iterated through. Depending on what code is written, array iteration could end up with an altered array of either the same or different length, such as array methods like .map() or .filter().



5. What is the difference between a class and an object?
Your answer: Classes are the blueprints for creating objects, while objects are particular instances of the classes themselves. For example, you might have a class of "Car" in which some defining characteristics of a car are listed out
- (body style, price, model year, manufacturer, model, etc.)
But an object of that car class is simply a particular instance of the class "car"
- (continuing with the analogy, it could be something like (sedan, $20000, 2015, Honda, Civic))
Researched answer: Classes are templates for the creation of objects in JavaScript, objects being collections of various different data types. Those data collections called objects typically contain many defining key:value pairs. Using an analogy, think of musical instruments. We recognize that individual *classes* of musical instruments (such as pianos, guitars, or drums) encapsulate everything that we know about them, including their general characteristics and properties. Objects are the actual instances of those musical instruments (Austin's guitar, Elyse's piano (??), my set of drums (that I don't have)). In JavaScript, we can define classes with various parameters (those characteristics/properties), with which to define individual objects.



6. STRETCH: What is hoisting in JavaScript?
Your answer: No clue!!
Researched answer: Whoa.. So hoisting.. Is the practice within JavaScript of repositioning (without actually repositioning? I'm unsure) certain elements or declarations to the top of it's relevant block. This allows for, as an example, variables to be utilized within functions even if they are declared after the function invocation. Weird.. 



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.
1. User stories: These pertain to the certain aspects that a user of a webpage interacts with (UI). Functions, features, and interactions available to users make up the user stories.
2. Spread operator: The spread operator (...) is a way that JavaScript developers can shorthand some certain commands relating to iterable objects such as arrays, strings, or objects. Concatenation, duplication, and passing arguments can be shorthanded with the spread operator. 
3. React: Based on JavaScript, React is a JS library used in webpage creation. React simplifies the frontend of webpages so that it looks prettier to the users that access it, and it revolves around the user interaction/user interface. Its reusable and scalable properties make it an extremely valuble program for use in many popular applications we all know and (mostly) use today, such as FaceBook (the creators of React) for example.
4. React props: Props here stands for properties, and the react props serve to pass information between computers and systems, so as to create a shared database. This passing of information throughout the hierarchy of servers/computers acts as a means of communications, and allows for greater projects to be tackled.
5. DOM events: DOM (document object model) events are essentially the interactions that happen between a webpage or application and a user. Anything that the user does that has to do with the UI can be considered to be a DOM event. Social media sites/apps serve as a great example for this: Whenever a user does something (that they are able to interact with, a.k.a pertaining to the UI) it changes the page, but only updates that specific element. Commenting or liking a post, sharing a post with friends, or reposting things are all DOM events.