// 1. WRITE A FUNCTION THAT TAKES TWO NUMBERS AND RETURNS THE MAXIMUM OF THE TWO.
// const max = (num1, num2) => {
//   if (num1 > num2) return num1;
//   else return num2;
// };
// console.log(max(100, 110));
//================================================================================
// 2. WRITE A FUNCTION THAT RECEIVES THE WIDTH AND HEIGHT OF AN IMAGE AND RETURNS TRUE
// function isLandscape(width, height) {
//   return width > height;
// }
// console.log(isLandscape(800, 600));
//================================================================================
// 3. WRITE A FUNCTION THAT RECEIVES AN INPUT. IF THE NUMBER IS DEVISIBLE BY 3 WE GET THE
//MESSAGE FIZZ. DIVISIBLE BY 5 WE GET BUZZ. DIVISIBLE BY BOTH 3 AND 5 WE GET FIZZBUZZ.
// const fizzBuzz = (number)=>{
//     if (typeof(number) !== "number") return "NOT A NUMBER!"
//     else if(number % 3 === 0 && number % 5 === 0) return "FIZZBUZZ!"
//     else if(number % 3 === 0) return "FIZZ!"
//     else if(number % 5 === 0) return "BUZZ!"
//     else (number % 3 !== 0 && number % 5 !== 0)
//     return number
// }
// console.log(fizzBuzz(14))
//===================================================================================
// 4. WRITE A FUNCTION THAT RECEIVES A PARAMETER AS SPEED OF A CAR. THE SPEED LIMIT IS 70.
// IF A CAR DRIVES SLOWER THAN 70 OR 70 WE GET "OK", FOR EVERY 5 KM ABOVE THE SPEED LIMIT
// THEY'RE GONNA GET 1 POINT. IF THE DRIVER GETS MORE THAN 12 POINTS, WE GET "LICENSE SUSPENDED"
// const checkSpeed = (speed) => {
//   let result
//   if (speed < 75) return "OK!";
//   else {
//     result = Math.floor((speed - 70) / 5);
//     if(result >= 12) return "LICENSE SUSPENDED!"
//   }
//   return result
// };
// console.log(checkSpeed(71))
//======================================================================================
// 5. WRITE A FUNCTION THAT TAKES A PARAMETER CALLED LIMIT. WHEN WE CALL THE FUNCTION WE SHOULD
// function showNumbers (number){
//     for (let i = 0; i <= number; i++){
//         if(i%2===0) console.log(i, "EVEN")
//         else console.log(i, "ODD!")
//     }
// }
// showNumbers(10)
//======================================================================================
// 6. WRITE A FUCTION THAT TAKES AN ARRAY AS INPUT AND RETURNS THE NUMBER OF TRUTHY ELEMENTS IN THE ARRAY.
  // const countTruthy = (arr)=>{
  //   let counter = 0;
  //   for(let element of arr){
  //     if(element) counter++
  //   }
  //   return counter
  // }
  // console.log(countTruthy([1,2,false,3,""]))
//======================================================================================
// 7. WRITE A FUNCTION THAT RECEIVES AN OBJECT AND DISPLAYS ALL THE PROPERTIES OF THE OBJECT THAT ARE STRING.
// const movie = {
//     title: "a",
//     releaseYear: 2018,
//     rating:4.5,
//     director:"b"
// }
//  const showProperties = (obj)=>{
//   for(let key in obj){
//     if(typeof(obj[key]) === "string")
//     console.log(key, obj[key])
//   }
//  }
//  showProperties(movie)
//========================================================================================
// 8. WRITE A FUNCTION THAT RECEIVES A NUMBER AND RETURNS THE SUM OF ALL THE MULTIPLES OF
// 3 AND 5 UP TO THE NUMBER.
  // const sum = (num)=>{
  //   let counter = 0;
  //   for(let i=0;i<=num;i++){
  //     if(i%3===0 || i%5===0) counter+=i
  //   }
  //   return counter
  // }
  // console.log(sum(10))
//=======================================================================================
// 9. WRITE A FUNCTION THAT RECEIVES A STUDENT'S GRADES THROUGH AN ARRAY AND CALCULATES THE AVERAGE.
// IF AVERAGE IS BETWEEN 1 TO 59 LOG "FAIL". 60 AND 69 SHOULD BE "D". 70 AND 79 SHOULD BE "C". 80 AND
// 89 SHOULD BE "B". 90 AND 100 SHOULD BE "A"
  const calculateGrades = (grades)=>{
    let sum = 0;
    let average = 0
    for(let grade of grades){
      sum+=grade
    }
    average = sum / grades.length;
    if(average>= 0 && average<=59) console.log("FAILED!")
    else if(average<69) console.log("D!")
    else if(average<79) console.log("C!")
    else if(average<89) console.log("B!")
    else if(average<=100) console.log("A!")
    
  }
  calculateGrades([10,100,90])
//=============================================================================================
// 10. WRITE A FUNCTION THAT RECEIVES A NUMBER AS PARAMETER FOR ROWS  AND PRINTS STARTS. FOR EXAMPLE
// IF WE GIVE IT 5, WE HAVE 5 ROWS OF STARTS, FIRST ROW 1 STAR, SECOND ROW 2 STAR AND SO ON...
// const printStarts = (rows)=>{

//     for(let i = 1; i <= rows; i++){
//         let star = "";
//         for(let j = 1; j <= i; j++){
//             star += "*"
//         }
//         console.log(star)
//     }

// }
// printStarts(10)
//=============================================================================================
// 11. WRITE A FUNCTION THAT TAKES A NUMBER AS PARAMETER AND SHOWS ALL THE PRIME NUMBERS FROM 0 TO THAT NUMBER.
// const showPrimes = (number)=>{
//     for (i = 1; i<=number; i++){
//         let counter = 0;
//         for(j = 1; j <= i; j++){
//             if(i % j === 0) counter++;
//         }
//         if(counter === 2) console.log(i)
//     }

// }
// showPrimes(20)
//==============================================================================================
// 12. CREATE AN ADDRESS OBJECT WITH 3 PROPERTIES AS STREET, CITY, ZIP CODE, AND A FUNCTION THAT RECEIVES THE
// ADDRESS OBJECT AND DISPLAYS ALL THE PROPERTIES WITH THEIR VALUE.
// const address = {
//     street: "Bogstadveien",
//     city:"Oslo",
//     zipCode: "0366"
// }
// function showAdress (obj){
//     for (let key in obj){
//         console.log(key, obj[key])
//     }
// }
// showAdress(address)
//==============================================================================================
// 13. CREATE THE ADDRESS OBJECT USED IN THE PREVIOUS EXAMPLE USING FACTORY AND CONSTRUCTOR FUNCTION.
// FACTORY
// function address (street,city,zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     }
// }
// const address1 = address("Bogstadveien","Oslo","0366")
// console.log(address1)
// // CONSTRUCTOR
// function Address (street,city,zipCode){
//     this.street=street;
//     this.city=city;
//     this.zipCode=zipCode;
// }
// const address2 = new Address ("Ulleval", "Oslo", 0850)
// console.log(address2)
//================================================================================================
// 14. USE THE CONSTRUCTOR FUNCTION IN THE PREVIOUS ASSIGMENT AND CREATE TWO NEW ADDRESS INSTANCES.
// WRITE A FUNCTION THAT RECEIVES THESE TWO ADDRESSES (OBJECTS) AND CHECKS IF THEY ARE EQUAL.ALSO,
// WRITE ANOTHER FUNCTION THAT CHECKS IF THEY (TWO ADDRESSES) ARE REFRENCING TO THE SAME OBJECT.
// function Address (street, city, zipCode){
//   this.Address= street;
//   this.city=city;
//   this.zipCode=zipCode
// }
// const address1 = new Address("a", "b", "c");
// const address2 = new Address("a", "b", "c");

// function areSame (ad1,ad2){
//     return ad1 === ad2
// }

// function areEqual(ad1,ad2){
//     if(ad1.street === ad2.street && ad1.city === ad2.city && ad1.zipCode === ad2.zipCode)
//         return true
// }

// console.log(areSame(address1,address2));
// console.log(areEqual(address1,address2))
//=======================================================================================
// 15.CREATE A BLOGPOST OBJECT USING OBJECT LITERAL SYNTAX WITH THESE PROPERTIES: TITLE, BODY,
//AUTHOR, VIEWS, COMMENTS AS AN ARRAY(AUTHOR, BODY),ISLIVE(TRUE/FALSE)
// const blog = {
//     title: "New Post",
//     Body: "Check out the link",
//     author: "Reza",
//     views: 100,
//     comments: [{
//         author: "Crazy",
//         body: "Said bullshit"
//     }],
//     isLive: true
// }
// console.log(blog)
//========================================================================================
// 16. CREATE THE BLOGPOST OBJECT IN THE LAST EXAMPLE USING CONSTRUCTOR FUNCTION. IMAGINE IT HASN'T BEEN
//PUBLISHED YET.
// function Blogpost (title,body,author){
//     this.title = title,
//     this.body = body,
//     this.author = author,
//     this.isLive = false
// }
//=======================================================================================
// 17. CREATE AN ARRAY OF OBJECTS, EACH OBJECT WE CALL A PRICE RANGE OBJECT.
// const prices = [{label: "$", tooltip:"Inexpensive", minPerPerson: 0, maxPerPerson:10 },
// {label: "$", tooltip:"Moderate", minPerPerson: 11, maxPerPerson:20},
// {label: "$", tooltip:"Expensive", minPerPerson: 21, maxPerPerson:50}]
//======================================================================================
// 18. WRITE A FUNCTION CALLED ARRAYFROMRANGE, IT TAKES 2 PARAMETERS CALLED MIN AND MAX. THIS FUNCTION
//SHOULD RETURN AN ARRAY BETWEEN THE MIN AN MAX NUMBER.
// const arrayFromRange = (min,max)=>{
//     let result = [];
//     for (let i = min; i<= max; i++){
//         result.push(i)
//     }
//     return result
// }
// console.log(arrayFromRange(-2,3))
//=======================================================================================
// 19. WRITE A FUNCTION LIKE INCLUDES METHOD. THE FUNCTION SHOULD TAKE AN ARRAY AND A SEARCH ELEMENT.
// IF WE HAD THE SERACH ELEMENT THE FUNCTION RETURNS TRUE, OTHERWISE FALSE.
// const includes = (array,searchElement)=>{
//     for(let element of array){
//         if(element === searchElement) return true
//     }
//     return false
// }
// console.log(includes([1,2,3,4],14))
//======================================================================================
// 20. WRITE A FUNCTION CALLED EXCEPT THAT TAKES AN ARRAY AS THE FIRST PARAMETER AND ANOTHER ARRAY AS
// THE SECOND PARAMETER. IN THE SECOND PARAMETER (ARRAY) WE ADD THE VALUES THAT WE WANT TO BE EXCLUDED
// FROM THE THE ORIGINAL ARRAY. SO, AS A RESULT THE RETURNED ARRAY SHOULD BE THE ORIGINAL ARRAY EXCEPT
// THE VALUES IN THE SECOND PARAMETER.
// const except = (array, exclude)=>{
//     let result = [];
//     for(let element of array){
//         if(!exclude.includes(element))
//         result.push(element)
//     }
//     return result
// }
// console.log(except([1,2,3,4,5,6], [6]))
//=========================================================================================
// 21. WRITE A FUNCTION CALLED "MOVE" AND IT IS USED TO MOVE AN ELEMENT IN AN ARRAY. IT RECEIVES AN
// ARRAY, THE INDEX OF THE ELEMENT YOU WANT TO MOVE AND AN OFFSET. IF THE OFFSET IS POSITIVE, THE ELEMENT
// SHOULD MOVE EQUALLY TO THE OFFSET TO THE RIGHT AND IF IT'S NEGATIVE TO THE LEFT.
// function move(array, index, offset) {
//   const theElement = array.splice(index, 1)[0];
//   const destination = index + offset;
//   if (destination > array.length || destination < 0) {
//     console.error("Error");
//     return
//   }
//     array.splice(destination, 0, theElement);
//     return array;

// }
// console.log(move([1, 2, 3, 4], 1, -1));
//=============================================================================================
// 22. CREATE A FUNCTION CALLED COUNT OCCURENCES, IT TAKES AN ARRAY AND A SEARCH ELEMENT AND RETURNS THE
// NUMBER OF TIMES THAT ELEMENT HAS OCCURED IN THIS ARRAY.
// const countOccurences = (array, searchElement)=>{
//     // let counter = 0;
//     // for (let element of array){
//     //     if(element === searchElement) counter++;
//     // }
//     // return counter

//     return array.reduce((accumulator, current)=>{
//         if(current === searchElement) accumulator++
//         return accumulator
//     },0)
// }
// console.log(countOccurences([1,2,3,4,1], 1))
//=============================================================================================
//23. CREATE A FUNCTION CALLED GET MAX, IT RECEIVES AN ARRAY AND RETURNS THE LARGEST NUMBER IN THE ARRAY.
// const getMax = (array)=>{
//     let largest = array[0];
//     for(let element of array){
//         if(element > largest) largest = element
//     }
//     return largest

//     return array.reduce((accumulator, current)=>{
//         if(current > accumulator) accumulator = current;
//         return accumulator
//     })
// }
// console.log(getMax([1,2,3,1, 4, 980,2,123,198, 9]))
//================================================================================================
// 24. GET ALL THE MOVIES IN 2018 WITH RATING GREATER THAN 4
//SORT THEM BY RATING IN A DESCENDING ORDER, PICK THEIR TITLE AND DISPLAY IT!
// const movies = [
//   { title: "a", year: 2018, rating: 4.5 },
//   { title: "b", year: 2018, rating: 4.7 },
//   { title: "c", year: 2018, rating: 3 },
//   { title: "d", year: 2017, rating: 4.5 },
// ];
// function theSort(movies) {
//   return movies.
//   filter((movie) => {
//     return movie.year === 2018 && movie.rating > 4;
//   }).
//   sort((a,b)=>{
//     if(a.rating > b.rating) return -1
//     if(a.rating < b.rating) return 1
//     if(a.rating === b.rating) return 0
//   }).map(movie =>{
//     return movie.title
//   });
// }
// console.log(theSort(movies))

//=============================================================================================
// 25. CREATE A FUNCTION CALLED SUM THAT TAKES A VARYING NUMBER OF ARGUMENTS AND RETURNS THE SUM.
// WHAT IF WE PASS AN ARRAY AS THE ARGUMENT? **ARGUMENTS IS AVAILABLE FOR NON-ARROW FUNCTION**
// DIFFERENCES BETWEEN REST AND ARGUMENTS =>
// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.
// The arguments object has additional functionality specific to itself (like the callee property).
// The ...restParam bundles all the extra parameters into a single array, therefore it does not contain any named argument defined before the ...restParam. Whereas the arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.
// function sum (...items){
//     let sum = 0;
//     if(Array.isArray(items)){
//         items = items[0];
//     }
//     for (let element of items){
//         sum+=element;
//     }
//     return sum
// }
// console.log(sum([1,2,5,6]))
// =============================================================================================
// 26. CREATE A CIRCLE OBJECT USING OBJECT LITERAL SYNTAX, THE OBJECT SHOULD HAVE A RADUIS PROPERTY
// THAT WE CAN READ OR WRITE. WE SHOULD ALSO HAVE AN AREA PROPERTY WHICH IS READ ONLY.
// TO MAKE A READ-ONLY PROPERTY WE SHOULD USE GETTER
// const circle = {
//     raduis: 1,
//     get area(){

//     }
// }
//===============================================================================================
// 27.
// try {
//     const numbers = [1, 2, 3, 4];
//     const count = countOccurrences(null, 1);
//     console.log(count);
//   }
//   catch (e) {
//     console.log(e.message);
//   }

//   function countOccurrences(array, searchElement) {
//     if (!Array.isArray(array))
//       throw new Error('Invalid array.');

//     return array.reduce((accumulator, current) => {
//       const occurrence = (current === searchElement) ? 1 : 0;
//       return accumulator + occurrence;
//     }, 0);
//   }

//===============================================================================================
// 1. IMPLEMENT A STOPWATCH WITH THE START, PAUSE, AND RESET FUNCTIONALITY.

// function Stopwatch (){
//   let startTime, endTime, running, duration = 0 ; 

//   this.start = function(){
//     if(running) throw new Error ("STOP WATCH HAS ALREADY STARTED!");
//     running = true;
//     startTime = new Date();
//   }

//   this.stop = function(){
//     if(!running) throw new Error ("THE TIMER HAS ALREADY STOPPED!");
//     running = false;
//     endTime = new Date();

//     const seconds = (endTime.getTime() - startTime.getTime()) / 1000 ; // getTime gets the miliseconds
//     duration += seconds;
//   }

//   this.reset = function(){
//     startTime = null;
//     endTime = null;
//     duration = null;
//     running = false;
//   }

//   Object.defineProperty(this, "duration", 
//  { get: function(){
//     return duration; // this duration is the variable
//   }})
// }
//===================================================================================================
// 2.
