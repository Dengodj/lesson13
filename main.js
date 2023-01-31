/* #1 */

var
myNum = 10,
myStr = 'строка',
myBool = true,
myArr = [1, 2, 3, 4, 5];
myObj = {
  first: 'First Name',
  last: 'Last Name'
}

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

/* #2 */

var myNum = 10;
console.log(myNum.toFixed(2));
var decimal2 = myNum.toFixed(2);

/* #3 */

var i = 0;

console.log(++i);
console.log(i++);
console.log(i-i);
console.log(--i);
console.log(i--);
console.log(i);

/* #4 */

var myTest = 20;

myTest += 10;
console.log(myTest);
myTest -= 5;
console.log(myTest);
myTest *= 25;
console.log(myTest);
myTest /= 5;
console.log(myTest);
myTest %= 5;
console.log(myTest);

/* #5 */
var myPi = Math.PI;
console.log(myPi);

var myRound = 89;
console.log(Math.round(89.279));

var myRandom = 8;
console.log(Math.round(Math.random()*10));

var myPow = 243;
console.log(Math.pow(3,5));

/* #6 */

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
length = 30;

console.log(strObj.length);


/* #7 */

var isRamaPos = strObj.str.indexOf('рама');

console.log('isRamaPos:', isRamaPos);

/* #8 */

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);

/* #9 */

var string = 'I like websites for car lovers because I am a car person myself!';
console.log(string.toUpperCase());

var string = 'I like websites for car lovers because I am a car person myself!';
console.log(string.toLowerCase());
