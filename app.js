//        *****JAVASC  ASSIGNM CHAPTER 01*******

var name = "userName"
alert(name);

var myName = "Anas"
alert(myName);

var message = "Hello World \n"
var firstName = "Anas"
var lastName = "Irfan"
var fullname = firstName + " " + lastName
alert(message + fullname);

var age = `"21" years old`
alert(age);

var text = `I am Studying in "SMIT" \n with the supervision is \n "Hazrat Allama Bashir Farooqi"`
alert(text);

var courseName = "Web & Mobile Hybrid Application Development \n \n Module-C"
alert(courseName);

var text = "PIZZA \n PIZZ \n PIZ \n PI \n P"
alert(text);

var againMess = "You will be a Software Developer in USA, and married to ABC with 2 kids"
alert(againMess);

var email = "anasirfan816@gmail.com"
alert("my email is \n" + email);

var message = "i am trying to learn from the book 'A smarter way to learn Javascript'"
alert(message);
var message = "Yay! I can write HTML content through Javascript"
document.write(message);

var visitorName = "Anas"
var prodTitle = "T-Shirt"
var quantity = "polo"
var sentence = visitorName + " ordered 3 " + prodTitle + " in " + quantity + " brand in clothing store"
alert(sentence);

//       ***** *****JAVASC  ASSIGNM CHAPTER 02 **********

var num1 = +prompt('type first number');
var num2 = +prompt('type second number');
alert('sum of ' +num1 + ' and ' +num2 + ' is ' +( +num1 + num2));

var num1 = prompt('enter first number');
var num2 = prompt('enter second number');
alert('result of subtracting ' + num1 + ' from ' + num2 + ' is ' + (num1 - num2));

var num1 = prompt('enter first number');
var num2 = prompt('enter second number');
alert('result of multiplying ' + num1 + ' and ' + num2 + ' is ' + (num1 * num2));

var num1 = prompt('enter first number');
var num2 = prompt('enter second number');
alert('result of dividing ' + num1 + ' by ' + num2 + ' is ' + (num1 / num2));

var num1 = prompt('enter first number');
var num2 = prompt('enter second number');
alert('remainder of dividing ' + num1 + ' by ' + num2 + ' is ' + (num1 % num2));

var currYear = prompt('enter your current year');
var birYear = prompt('enter your birth year');
var age = currYear - birYear
alert('they are either ' + --age + ' or ' + ++age + ' years old ');

 var totalMarks = prompt('type a total marks');
 var obtainedMarks = prompt('type a obtained marks');
 var percentage = obtainedMarks / totalMarks * 100
 alert('Total Marks : '+ totalMarks + '\nMarks obtained : ' + obtainedMarks + '\npercentage ' + percentage +'%');

var ticket = prompt("1 person movie ticket in 600 PKR.\n how many tickets do you need (type a number)");
alert("Total cost to buy " + ticket + " tickets to a movie is " + 600 * ticket + " PKR");

var doller = prompt("1 US Dollar = Rs 294.93 PKR. \n how many US doller's is (type a number)");
var Riyal = prompt("1 saudi Riyal = Rs 78.64 PKR. \n how many Saudi Riyal is (type a number)");
var PKR = 294.93 * doller + (78.64 * Riyal);
alert("Total currency in PKR : " + PKR);

var favSnack = prompt('write a name in your favourite snack');
var currAge = prompt('enter your current age');
var maxAge = prompt('enter your maximum age');
var estiAmount = prompt('please enter your estimated snack amount per day');
var lifSuppCal = (maxAge - currAge) * 365
var cost = lifSuppCal * estiAmount
alert('you will need ' + cost + ' ' + favSnack +' to last you until the ripe old age of ' + maxAge);

alert(num + " X 1 = " + num *1)
alert(num + " X 2 = " + num *2)
alert(num + " X 3 = " + num *3)
alert(num + " X 4 = " + num *4)
alert(num + " X 5 = " + num *5)
alert(num + " X 6 = " + num *6)
alert(num + " X 7 = " + num *7)
alert(num + " X 8 = " + num *8)
alert(num + " X 9 = " + num *9)
alert(num + " X 10 = " + num *10)

var table = prompt('enter a number and get a table');
for(let i=1; i<=10; i++){
    console.log(table  + ' X ' + i + ' = ' + table*i);
}

var priceOfItem1 = 560;
var priceOfItem2 = 200;
var quantityOfItem1 = 2;
var quantityOfItem2 = 5;
var shippingCharges = 150;
var item1 = priceOfItem1 * quantityOfItem1
var item2 = (priceOfItem2 * quantityOfItem2) + shippingCharges
var cost = item1 + item2
alert('Shopping Cart\n\n'+ 'price of item 1 is ' + priceOfItem1 + '\nquantity of item 1 is ' + quantityOfItem1 +
'\nprice of item 2 is ' + priceOfItem2 + '\nquantity of item 2 is '+quantityOfItem2 +
'\n\nShipping Charges '+ shippingCharges + '\n\nTotal cost of your order is ' + cost + ' PKR ');

    //   ***** *****JAVASC  ASSIGNM CHAPTER 03 **********

var userName = prompt("what's your name?");

if (userName === userName) {
    alert("Hi, " + userName);
} else {
    alert("you are a under 20 (atleast 20 age is required)");
}

var userNum = prompt("enter a number");

if (userNum === userNum) {
    alert(userNum+" X "+ 1 +" = "+userNum*1);
    alert(userNum+" X "+ 2 +" = "+userNum*2);
    alert(userNum+" X "+ 3 +" = "+userNum*3);
    alert(userNum+" X "+ 4 +" = "+userNum*4);
    alert(userNum+" X "+ 5 +" = "+userNum*5);
    alert(userNum+" X "+ 6 +" = "+userNum*6);
    alert(userNum+" X "+ 7 +" = "+userNum*7);
    alert(userNum+" X "+ 8 +" = "+userNum*8);
    alert(userNum+" X "+ 9 +" = "+userNum*9);
    alert(userNum+" X "+ 10 +" = "+userNum*10);
    alert(userNum + "    Thank you!    ");
}

var userCityNum = prompt("enter your city name");
if (userCityNum === userCityNum) {
    alert("Welcome to city of lights \n"+ userCityNum);
} else {
    alert("enter your city name please");
}

var genderNam = prompt('enter your gender name like! \n Male\nFemale\nOther');
if (genderNam === "male"){
    alert('Good Morning Sir');
} else if (genderNam === "female"){
    alert("Good Morning Ma'am");
} else {
    alert('please enter your gender name in small letter');
}

var trafColSig = prompt('Enter color and get message of traffic vichels');
if (trafColSig === 'red'){
    alert('vichels must stop');
} else if (trafColSig === 'yellow'){
    alert('vichels should get ready to move');
} else if (trafColSig === 'green'){
    alert('vichels can move now');
} else {
    alert('stay calm or you will be fined');
}

var carFuel = prompt('enter your remaining fuel in car (type a number)');
   if (carFuel < "0.25liter's"){
    alert('please refill the fuel in your car');
}  else if(carFuel >= "0.25liter's" ){
    alert('now you can a drive');
}  else{
    alert('your car can run out of petrol anytime');
}

var daysName = prompt('enter your days name');
   if (daysName === 'monday'){
    alert("it's a week day");
}  else if(daysName === 'tuesday'){
    alert("it's a week day");
}  else if(daysName === 'wednesday'){
    alert("it's a week day");
}else if(daysName === 'thursday'){
    alert("it's a week day");
}else if(daysName === 'friday'){
    alert("it's a week day");
}else if(daysName === 'saturday'){
    alert("it's weekend");
}else if(daysName === 'sunday'){
    alert(`"Yay! it's a holiday"`);
}else{
    alert(+ " it's not a day");
}

var temp = prompt('Enter a number and get check a weather');
    if(temp > 40) {
    alert('It is too hot outside.');
  } else if (temp > 30) {
    alert('The weather today is normal');
  } else if (temp > 20) {
    alert("Today's Weather is cool");
  } else if (temp > 10) {
    alert("OMG! Today's weather is so cool");
  } else{
    alert('Weather is sooooooo cold');
  }

var userScore = prompt('Dear user,  what is the authenticated score');
if (userScore > 50) {
    alert('You are passed!');
}else {
    alert('Try again');
}

var priceOfTShirt = 1000;
var priceOfUSB = 700;
var quantityOfTshirt = 2;
var quantityOfUSB = 3;
var shippingCharges = 250;
var ordered1 = priceOfTShirt * quantityOfTshirt
var ordered2 = (priceOfUSB * quantityOfUSB) + shippingCharges
var totalCost = ordered1 + ordered2
var discount = totalCost * 10 / 100
var orderDis = totalCost - discount
alert('price of T-shirt is '+priceOfTShirt +'\nquantity of T-shirt is '+quantityOfTshirt+
'\nprice of USB Flash drive is '+priceOfUSB+'\nquantity of USB flash drive is '+quantityOfUSB+'\n\nshipping charges '+
shippingCharges +'\n\nTotal cost of your order is '+totalCost+' PKR'+'\nDiscounted price is '+ orderDis+' PKR');

var totalMarks = prompt('enter a total marks and get your percentage and grade & messages');
var obtainedMarks = prompt('type a obtained marks');
var percentage = obtainedMarks / totalMarks * 100

if (percentage >= 80) {
    alert("Total Marks : "+totalMarks + "\nMarks obtained : " +obtainedMarks+"\nPercentage : "+percentage+"%"+ "\nGrade : A-one"+"\nRemarks : Excellent");
} else if(percentage >= 70) {
    alert("Total Marks : "+totalMarks + "\nMarks obtained : " +obtainedMarks+"\nPercentage : "+percentage+"%"+ "\nGrade : A"+"\nRemarks : Good");
} else if (percentage >= 60) {
    alert("Total Marks : "+totalMarks + "\nMarks obtained : " +obtainedMarks+"\nPercentage : "+percentage+"%"+ "\nGrade : B"+"\nRemarks : fair");
} else if (percentage >= 50){
    alert("Total Marks : "+totalMarks + "\nMarks obtained : " +obtainedMarks+"\nPercentage : "+percentage+"%"+ "\nGrade : C"+"\nRemarks : you need to improve");
} else {
    alert("Total Marks : "+totalMarks + "\nMarks obtained : " +obtainedMarks+"\nPercentage : "+percentage+"%"+ "\nGrade : Fail"+"\n Sorry")
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var seretNum = 7;
var userInput = +prompt('Guess the secret number!')
if (seretNum === userInput) {
    alert("Bingo")
} else {
    alert('wrong answer \ntry again')
}

var num = 7
alert(typeof(num))

var name = "anas"
alert(typeof(name))

var variable = false
alert(typeof(variable));

var userNum1 = prompt('enter a first number');
var userNum2 = prompt('enter a second number');
var operator = prompt('sir! kindly let us what operation do you want us to do for these numbers! +,-,*,/, and %');
if (operator === "+"){
    alert(+userNum1 + +userNum2);
}else if (operator === "-"){
    alert(userNum1 - userNum2);
} else if (operator === "*"){
    alert(userNum1 * userNum2);
} else if (operator === "/"){
    alert(userNum1 / userNum2);
} else if (operator === "%"){
    alert(userNum1 % userNum2);
} else {
    alert('invalid operator');
}

var afg = prompt('enter afgahanistan SCORE');
var pak = prompt('enter pakistan score');
if (pak > afg) {
    alert('ramiz raja: paksitan won te toss');
} else if (afg < pak){
    alert('afghan won the match');
} else{
    alert('the match has tied, after all extremely effort');
}

var pak = prompt("enter a PAK scores");
var afg = prompt("enter a AFG scores");
if (pak < afg) {
    alert("afgh won the match by "+ (pak - afg + " runs"));
} else if (afg < pak) {
    alert("pak won the match " + (pak - afg + " runs"));
} else {
    alert("the match has tied, after all extremely effort");
}

//      ***** *****JAVASC  ASSIGNM  CHAPTER 04 **********

var Num = prompt('Enter a number and get a result the number is even or odd');
if (Num %3 === 0) {
    alert('the number is completely divisible by 3 ' + ' your number is '+Num);
} else {
    alert('the number is not a completely divisible by 3 ' + '\nyour number is ' + Num);
}

var favNum = prompt('Enter a number and get a result the number is even or odd');
if (favNum %2 === 0) {
    alert('the number is Even ' + favNum);
} else if (favNum %2 !== 0) {
    alert('the number is odd ' + favNum);
} else {
    alert('value is Empty ' + favNum);
}

var age = prompt('enter your age');
if (age > 18) {
    alert('Old enough');
} else {
    alert('Too young');
}

userName = "Anas";
var userName = prompt('enter your userName here!');
if (userName === "Anas") {
    alert('Assalam-O-Alaikum \n'+userName+'\nand hope you are doing well');
} else {
    alert('');
}

var number = +prompt("type a number & get a result the number is divisible by 3 or not?");
  switch (number % 3) {
    case 0:
      alert(`${number} number is divisible by 3`);
      break;
    default:
      alert(`${number} number is not divisible by 3`);
  }

var num1 = +prompt('Enter the first number');
var operator = prompt('Enter the operator (+, -, *, /, %)');
var num2 = +prompt('Enter the second number');

switch (operator) {
    case '+':
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        if (num2 !== 0) {
            alert(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            alert("Division by zero is not allowed.");
        }
        break;
    case '%':
        alert(`${num1} % ${num2} = ${num1 % num2}`);
        break;
    default:
        alert(`Invalid operator`);
        break;
}

var time = prompt('enter a time a number in 24 hours format');
if (time >= 0 && time < 1200) {
    alert("'Good Morning' "+(time/100) + " AM "+" O'clock");
} else if (time >= 1200 && time < 1700 ) {
    alert("'Good afternoon' "+((time - 1200) / 100)+" PM "+" O'clock");
} else if (time >= 1700 && time < 2100) {
    alert("'Good evening' "+((time - 1200) / 100)+" PM "+" O'clock");
} else if (time >= 2100 && time <= 2359) {
    alert("'Good night' "+((time - 1200) / 100)+" PM "+" O'clock");
} else {
    alert('invalid time');
}

var num = 7
alert(typeof(num))

var name = "anas"
alert(typeof(name))

var variable = false
alert(typeof(variable));

var num = 2
alert(typeof(nu));

var num1 = prompt('enter a 1 number');
var num2 = prompt('enter a 2 number');
if (num1 === num2) {
   alert('true');
} else if (num1 !== num2) {
    alert(num1 +' is NOT equal to '+num2);
} else {
    alert('invalid characters');
}

var month = prompt('enter a month number and show your get a month');
month=Number.parseInt(month);
switch (month) {
    case 1:
        alert('y');
        alert(`${month} January`);
        break;
    case 2:
        alert(`${month} Feburary`);
        break;
    case 3:
        alert(`${month} March`);
        break;
    case 4:
        alert(`${month} April`);
        break;
    case 5:
        alert(`${month} May`);
        break;
    case 6:
        alert(`${month} June`);
        break;
    case 7:
        alert(`${month} July`);
        break;
    case 8:
        alert(`${month} August`);
        break;
    case 9:
        alert(`${month} September`);
        break;
    case 10:
        alert(`${month} Octubar`);
        break;
    case 11:
        alert(`${month} November`);
        break;
    case 12:
        alert(`${month} December`);
        break;
    default:
        alert(`${month} invalid month`);
}

var userAge = prompt('enter your current age');
alert(userAge > 18 ? 'Old enough': 'Too young' );

var userInput = prompt('enter something');
var code = userInput.charCodeAt()
alert(code)                 //ye Ascll table s ans no lakar dega

var userInput = prompt('enter something');
var  code = userInput.charCodeAt();
if (code >= 97 && code <= 122) {
    alert('you have a small letter '+userInput);
} else if (code >= 65 && code <= 90) {
    alert('you have a Capital letter '+userInput);
} else if (code >= 33 && code <= 47){
    alert('you have a special characters '+userInput);
} else if (code >= 48 && code <= 57) {
    alert('you have a number '+userInput);
} else {
    alert('you have entered a number/invalid character '+userInput);
}

var leapYear = prompt("Saal enter karein aur dekhein kya yeh leap year hai:");
var year = parseInt(leapYear);

if (isNaN(year)) {
    alert("Galat input. Kripya ek valid saal enter karein.");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year + " ek leap year hai.");
} else {
    alert(year + " ek leap year nahi hai.");
} //LEAP YEAR FORMULA
The year 2000 is evenly divisible by 400, so it's a leap year.
The year 1900 is evenly divisible by 100, but not by 400, so it's not a leap year.
The year 2024 is evenly divisible by 4 and not by 100, so it's a leap year.
The year 2022 is not evenly divisible by 4, so it's not a leap year.

    //   ***** *****JAVASC  ASSIGNM 05 **********

var studentName = [];
studentName.unshift('kashif');
console.log(studentName);

var studentName = ['anas irfan', 'kashif'];
studentName.shift('anas irfan');
alert(studentName);

var studentName = ['furqan', 'jawed', 'iqbal', 'ahmed', 'huzaifa'];
console.log(studentName);

 var counting = [111, 112, 113, 114, 115, 119];
 console.log(counting);

var boolean = [true, false];
console.log(boolean);

var mixedDetail = ['anas', 24, 'irfan', 'I.Com', '0319-0673030', 'N-653', 'male', '123@abc'];
console.log(mixedDetail);

var education = [];
education.unshift('SSC', '\nHSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. phil.', 'PhD');
console.log(education); 

var colors = ['red', 'blue', 'yellow']
var colorIndex = prompt('At which index you want to remove a color?')
var colorQuantity = prompt('How many colors you want to remove from '+colorIndex+' index?')
console.log(colors.splice(colorIndex, colorQuantity));


kuch sawaalat baqi hn is assignment k 


    //  ***** *****JAVASC  ASSIGNM CHAPTER 06 Loop Assign **********

for (var i = 1; i <= 5; i++) {
    document.write(i + ' Hello <br>');
}

for (var i = 1; i <= 10; i++) {
    document.write(i + '<br>');
}

var table = prompt('Enter a table number?');
var tableLength = prompt('how many table length do you want?');

for (var i = 1; i <= tableLength; i++)  {
        document.write(table + ' X ' + i +' = '+table*i +'<br>')
}

var A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
for (var i=0; i<A.length; i++) {
    document.write(A[i]+'<br>');
}

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
for (var i=0; i<fruits.length; i++) {
    console.log('Element at index '+ i +' is '+fruits[i]);
}

var numItems = prompt('Enter number of items');
var items = [];

for (var i = 0; i < numItems; i++) {
    var value = prompt('Enter value for index ' + i);
    items.push(value);
}   //ye khud sy bad me krna ha

console.log('Items array:', items);

var EvenOdd = prompt('enter a number');
if (EvenOdd %2===0) {
    for (var i=0; i<EvenOdd.length; i++) {
        document.write('EvenOdd '+i)
    }
} else if (EvenOdd %2!==0) {
    for(var i=1; i<EvenOdd.length; i++){
        document.write('EvenOdd '+i)
    }
} else {
    alert("Invalid input. Please enter 'even' or 'odd'.")
}

function createLoop(startNumber, endNumber){
      for(var i = startNumber; i <= endNumber; i++){
         console.log(i)
      }                                  
}

function countNumbers(start, end) {                  
    for (let i = start; i <= end; i++) {     
      document.write(i + "<br>");
    }
  }

Outer function to calculate the hypotenuse
function calculateHypotenuse(base, perpendicular) {  
   // Inner function to calculate the square of a number
   function calculateSquare(x) {
     return x * x;
   }
 
  
   const baseSquared = calculateSquare(base);
   const perpendicularSquared = calculateSquare(perpendicular);
 
   // Calculate the hypotenuse
   const hypotenuse = Math.sqrt(baseSquared + perpendicularSquared);
 
   return hypotenuse;
 }

var star = '*****'
for (var i = 0; i <= 5; i++) {
    console.log(star.slice(0, i))
}

function num(a, b) {
    var num1 = +prompt('enter a first num')
    var num2 = +prompt('enter a second num')
    return num1 + num2;
}
var sum = num();
console.log(sum)

var age = prompt('enter your birth year?')
var currentDate = new Date()
var x = currentDate.getFullYear()- age
console.log(x)

function age() {
   var age = prompt('enter your birth year')
   var currentDate = new Date()
   var x = currentDate.getFullYear() - age
   return x;
}
var y = age();
console.log(y)



var cars = ['Audi', 'corolla', 'mehran', 'swift']
console.log(cars.push('jackquar')) //ye return 5 kr rha ha mtlb array ki length return krta h

var cars = cars.push('jackquar')


var cars = ['fx', 'coure']
console.log(cars.pop()) 


var cars = ['civic', 'lamborgini', 'Alto']
console.log(cars.splice(2, 1, 'civic')) 
console.log(cars)
