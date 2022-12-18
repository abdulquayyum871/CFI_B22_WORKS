console.clear();
//1
function getResult(value) {
if (value > 4) {
return 10;
} else {
return 20;
}
}
var result = getResult(3);
console.log(result);

// 2)
function getResult(value) {
if (value.length < 4) {
return 'short';
} else {
return 'long';
}
}
var result = getResult('hello');
console.log(result);

// 3)
function getResult(bool1, bool2) {
return bool1 || bool2 ? 'one or more' : 'neither';
}
var result = getResult(true, false);
console.log(result);

// 4)
function getResult(arr) {
if (arr.length) {
return 'full';
} else {
return 'empty';
}
}
var result = getResult([1, 2, 3]);
console.log(result);
// 5)
function getResult(value) {
return value === 10 ? 'ten' : 'not ten';
}
var result = getResult(9);
console.log(result);
// 6)
function getResult(value) {
return typeof value === 'number' ? 'numeric' : 'other';
}
var result = getResult('10');
console.log(result);
// 7)
function getSum(values) {
var sum = 0;
for (var i = 0; i < values.length; i++) {
sum += values[i];
}
return sum;
}
function getAverage(values) {
return getSum(values) / values.length;
}
result = getAverage([1, 2, 3]);
console.log(result);
// 8)
var nonNumericCards = {
1: 'Ace',
11: 'Jack',
12: 'Queen',
13: 'King',
};
var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
var pack = [];
for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
var suit = suits[suitIndex];
for (var number = 1; number < 14; number++) {
var value = nonNumericCards[number] || number;
pack.push(value + ' of ' + suit);
}
}
var result = pack[0];
console.log(result);
// 9)
var person1 = {
name: 'Bob',
dateOfBirth: '1973-01-03',
};
var person2 = {
name: 'Bob',
dateOfBirth: '1982-01-03',
};
function sameDateAndMonth(date1, date2) {
var sameMonth = date1.getMonth() == date2.getMonth();
var sameDate = date1.getDate() == date2.getDate();
return sameMonth && sameDate;
}
function haveSameBirthday(person1, person2) {
var date1 = new Date(person1.dateOfBirth);
var date2 = new Date(person2.dateOfBirth);
return sameDateAndMonth(date1, date2);
}
var result = haveSameBirthday(person1, person2);
console.log(result);
// 10)
function add12Hours(time) {
var hourMinute = time.split(':');
return 12 + parseFloat(hourMinute[0]) + ':' + hourMinute[1];
}
function to24HourTime(time) {
var parts = time.split(' ');
if (parts[1] === 'AM') {
return parts[0];
}
return add12Hours(parts[0]);
}
var result = to24HourTime('7:30 PM');
console.log(result);
// 11)
var numberArray = new Array(10);
for (var i = 0; i < numberArray.length; i++) {
numberArray[i] = i * 3;
}
var result = numberArray[8];
console.log(result);
// 12)
var string = '0123456789';
var newString = '';
for (var i = 0; i < string.length; i++) {
var char = string.charAt(i);
newString += char + char;
}
var result = newString.length;
console.log(result);
// 13)
var score = 10;
function doubleScore() {
score = score * 2;
}
doubleScore();
var result = score;
console.log(result);
// 14)
var users = [
{ username: 'amy', admin: true },
{ username: 'bob', admin: false },
{ username: 'helen', admin: true },
{ username: 'amir', admin: false },
{ username: 'carmen', admin: false },
];
function countAdmins(userArr) {
var count = 0;
for (var i = 0; i < userArr.length; i++) {
if (userArr[i].admin) {
count = count + 1;
}
}
return count;
}
var result = countAdmins(users);
console.log(result);
// 15)
var users = [];
function addUser(users, newUser) {
return [].concat(users, newUser);
}
users = addUser(users, 'bob');
users = addUser(users, 'amy');
users = addUser(users, 'will');
users = addUser(users, 'lin');
var result = users.length;
console.log(result);
// 16)
var list = [1, 2, 3];
function doubleItems(input) {
for (var i = 0; i < input.length; i += 1) {
input[i] = input[i] * 2;
}
}
doubleItems(list);
var result = list[1];
console.log(result);
// 17)
var animal = {
name: 'Snuffles',
type: 'DOG',
};
function rename(input, newName) {
input.name = newName;
}
rename(animal, 'Snowball');
var result = animal.name;
console.log(result);
// 18)
function calculateMagnitude(vector) {
var magnitudeSquared = vector.x * vector.x + vector.y *
vector.y;
var magnitude = Math.sqrt(magnitudeSquared);
vector.magnitude = magnitude;
}
var vector = { x: 3, y: 4 };
calculateMagnitude(vector);
var result = vector.magnitude;
console.log(result);
// 19)
function getSalutation(title, firstName, lastName) {
var salutation;
if (!title) {
salutation = firstName + ' ' + lastName;
} else {
salutation = title + ' ' + lastName;
}
return salutation;
}
var result = getSalutation('Miss', 'Jane', 'Marple');
console.log(result);
// 20)
function getLogin(user) {
var login;
if (!user.admin) {
login = user.email;
} else {
login = user.username;
}
return login;
}
var user = {
username: 'jane',
admin: true,
email: 'jane@example.com',
};
var result = getLogin(user);
console.log(result);
// 21)
function canLegallyDrink(age) {
var legal = age >= 18;
if (legal) {
return 'yes';
} else {
return 'no';
}
}
var result = canLegallyDrink(14);
console.log(result);
// 22)
function containsCarbon(compound) {
if (compound.indexOf('C') === -1) {
return 'no';
} else {
return 'yes';
}
}
var result = containsCarbon('H2O');
console.log(result);
// 23)
var totalPokemon = 150;
function caughtThemAll(numPokemon) {
if (numPokemon !== totalPokemon) {
return 'gotta catch them all';
} else {
return 'caught them all';
}
}
var result = caughtThemAll(102);
console.log(result);
// 24)
function isMeaningOfLife(num) {
if (num === 42) {
return 'yes';
} else {
return 'no';
}
}
var result = isMeaningOfLife(41);
console.log(result);
// 25)
var letters = 'abcdefghijklmnopqrstuvwxyz';
var lettersArray = letters.split(''); // ['a', 'b', ..]
function letterForNumber(input) {
if (input < 1 || input > 26) {
return '-';
}
return lettersArray[input - 1];
}
var result = letterForNumber(3);
console.log(result);
// 26)
function asPercentage(value, total) {
if (total === 0) {
return 0;
}
return (value / total) * 100;
}
var result = asPercentage(20, 40);
console.log(result);
// 27)
function isVegetable(food) {
var answer;
if (food === 'potato') {
answer = 'yes';
} else if (food === 'tomato') {
answer = 'no';
} else {
answer = 'maybe';
}
return answer;
}
var result = isVegetable('tomato');
console.log(result);
// 28)
function getEmotion(happinessLevel) {
var emotion;
if (happinessLevel < 5) {
emotion = ':(';
} else if (happinessLevel === 5) {
emotion = ':|';
} else {
emotion = ':)';
}
return emotion;
}
var result = getEmotion(7);
console.log(result);

// 29)
function canLegallyDrink(age) {
if (age >= 18) {
return 'legal';
} else {
return 'illegal';
}
}
var result = canLegallyDrink(25);
console.log(result);
// 30)
function containsCarbon(compound) {
if (compound.indexOf('C') !== -1) {
return 'yes';
}
return 'no';
}
var result = containsCarbon('CO2');
console.log(result);
// 31)
function canDrink(drinkerAge, drinkIsAlcoholic) {
var underAge = drinkerAge < 18;
return !underAge || !drinkIsAlcoholic;
}
var result = canDrink(21, true);
console.log(result);
// 32)
function withinRange(value, start, end) {
var beforeStart = value < start;
var afterEnd = value > end;
return !beforeStart && !afterEnd;
}
var result = withinRange(10, 4, 20);
console.log(result);
// 33)
function isNotADuck(quacksLikeADuck, walksLikeADuck) {
return !(quacksLikeADuck && walksLikeADuck);
}
var result = isNotADuck(true, false);
console.log(result);
// 34)
function differentNamesAndValues(input1, input2) {
return !(input1.name === input2.name || input1.value ===
input2.value);
}
var object1 = { name: 'bob', value: 3 };
var object2 = { name: 'bob', value: 4 };
var result = differentNamesAndValues(object1, object2);
console.log(result);
// 35)
var you = {
happy: true,
knowsIt: false,
};
function shouldClapHands(person) {
if (!(person.happy && person.knowsIt)) {
return false;
}
return true;
}
var result = shouldClapHands(you);
console.log(result);
// 36)
function processStr(str) {
return str.split('').sort().join('');
}
var result = processStr('made');
console.log(result);
// 37)
function getSquare(value) {
return value * value;
}
var result = getSquare(3);
console.log(result);
// 38)
var MAX_LENGTH = 5;
function checkStr(value) {
return value && value.length <= MAX_LENGTH;
}
var result = checkStr('pineapple');
console.log(result);
// 39)
function processArray(values) {
var sum = 0;
for (var i = 0; i < values.length; i++) {
sum += values[i];
}
return sum;
}
var result = processArray([1, 2, 3, 4]);
console.log(result);
// 40)
var itemsForSale = {
cheese: {
price: {
normal: 3,
reduced: 1.5,
},
},
tv: {
price: {
normal: 300,
reduced: 150,
},
},
};
function getNormalPrice(item) {
return itemsForSale[item].price.normal;
}
var result = getNormalPrice('cheese');
console.log(result);

// 41)
var vowels = ['a', 'e', 'i', 'o', 'u'];
function countVowels(inputString) {
var count = 0;
for (var i = 0; i < inputString.length; i += 1) {
var character = inputString.charAt(i);
if (vowels.indexOf(character) !== -1) {
count += 1;
}
}
return count;
}
var result = countVowels('boolean');
console.log(result);
// 42)
function sort(input) {
var lowerCase = input.toLowerCase();
var lettersArray = lowerCase.split('');
var sorted = lettersArray.sort();
return sorted.join('');
}
var result = sort('bag');
console.log(result);
// 43)
function sentenceCase(input) {
return input.charAt(0).toUpperCase() + input.slice(1,
input.length);
}
var result = sentenceCase('the right answer');
console.log(result);
// 44)
function reverse(sentence) {
return sentence.split(' ').reverse().join(' ');
}
var sentence = 'Hello world!';
var result = reverse(sentence);
console.log(result);
// 45)
function isNumber(value) {
// check for NaN, as NaN is of type 'number'
return typeof value === 'number' && !isNaN(value);
}
var result = isNumber('58');
console.log(result);
// 46)
function getVectorMagnitude(x, y) {
// Magnitude of a vector is defined by
// M^2 = x^2 + y^2
var magnitudeSquared = x * x + y * y;
return Math.sqrt(magnitudeSquared);
}
var result = getVectorMagnitude(3, 4);
console.log(result);
// 47)
function doRangesOverlap(range1, range2) {
return range1.min <= range2.max && range1.max >= range2.min;
}
var firstRange = { min: 3, max: 7 };
var secondRange = { min: 6, max: 10 };
var result = doRangesOverlap(firstRange, secondRange);
console.log(result);

var list = ['rock', 'paper', 'hard place', 'scissors'];
function isInTrouble(item) {
var index = list.indexOf(item);
return index > list.indexOf('rock') && index <
list.indexOf('hard place');
}
var result = isInTrouble('paper');
console.log(result);

// 49)
var animalSoundMap = {
sheep: 'baa',
cat: 'meow',
cow: 'moo',
fox: 'ring-ding-ding-ding-ding-ring-ding',
};
function getAnimalSound(animal) {
var sound = animalSoundMap[animal];
if (sound) {
return sound;
}
// We assume that animals without an explicit sound, make a woof sound
return 'woof';
}
var result = getAnimalSound('elephant');
console.log(result);

// 50)
var fixedCost = 200;
var monthlyCost = 20;
var result = fixedCost + monthlyCost * 12;
console.log(result);
// 51)
var result = (true && true) || (true && false);
console.log(result);
// 52)
function isTeenager(age) {
return age < 20 && age > 12;
}
var result = isTeenager(14);
console.log(result);
//53
var taxRate = 0.2;
var salary = 100;
var bonus = 10;
var result = salary - salary * taxRate + bonus;
console.log(result);
//54
function prefixString(prefix, value) {
return (prefix || '$') + value;
}
var result = prefixString(null, '1,000');
console.log(result);
//55
var employees = 10;
var employeeTurnover = 0.9;
var applications = 3;
var result = applications + employees * employeeTurnover;
  console.log(result);