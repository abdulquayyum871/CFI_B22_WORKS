// numeric
// other
// other
// other
// numeric
// other
// 2
// Ace of Hearts
// true
// 19:30
// 24
// 20
// 20
// 2
// 4
// 4
// Snowball
// 5
// Miss Marple
// jane
// illegal
// no
// gotta catch them all
// no
// c
// 50
// no
// :)
// legal
// yes
// true
// true
// true
// false
// false
// adem
// 9
// false
// 10
// 3
// 4
// abg
// The right answer
// world! Hello
// false
// 5
// true
// true
// woof
// 440
// true
// true
// numeric
// other
// other
// other
// numeric
// other
// 2
// Ace of Hearts
// true
// 19:30
// 24
// 20
// 20
// 2
// 4
// 4
// Snowball
// 5
// Miss Marple
// jane
// illegal
// no
// gotta catch them all
// no
// c
// 50
// no
// :)
// legal
// yes
// true
// true
// true
// false
// false
// adem
// 9
// false
// 10
// 3
// 4
// abg
// The right answer
// world! Hello
// false
// 5
// true
// true
// woof
// 440
// true
// true
// 90
// $1,000
// 12

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