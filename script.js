// This is an in-line comment.

/* This is a
multi-line comment */

var myName; // объявление переменной
myName = 'Dmitry'; // присвоили слово 'Dmitry' переменной myName

var a; ///объявили переменную а
a = 7; // присвоили ей значение 7
var b; // объявили переменную b
b = a; // присвоили переменной b значение a, т.е. 7

var a = 9; //объявили переменную и сразу присвоили ей значение

var myFirstName = 'Dmitry'; // присвоили переменной myFirstName строковое значение, которое заключается в одинарные
var myLastName = "Melnykov"; // или двойные кавычки

var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong; // для объявления переменных используется cammelCase

let catName = "Oliver"; // в новом стандарте переменные объявляются не через var, а через let
let catSound = "Meow!"; // нужно для того, чтобы случайно не перезаписать переменную

const myWife = 'Tatiana'; // переменные, в которых не планируется меняться значение записываются через const
let amountChildren = 0; // переменные значение которых может поменяться в дальнейшем записывается через let

const myVar1 = 5 + 4; // оператор + складывает числа между собой
const myVar2 = 10 - 6; // оператор - определяет разницу значений
const myVar3 = 5 * 4; // оператор * умножает значения
const myVar4 = 20 / 5; // оператор / делит числа между собой

let i = 0; // переменная i с значением 0
i++; // краткая запись +1 к переменной. Аналогично i = i + 1

let count = 99;
count--; // аналогично с ++, но уменьшает на -1

let myDecimal = 5.4; // number может содержать десятичное значение

const product1 = 2.0 * 2.5; // вычисления также можно производить с десятичными числами
const product2 = 4.4 / 2.0;

const remainder1 = 10 % 2; // оператор % это остаток от деления. Зачастую его используют для определения четных и нечетных чисел. В данном случае остаток от деления 0, число четное
const remainder2 = 11 % 2; // остаток от деления 1, число нечетное

let number1 = 5; // объявляем переменную number1 с значением 5
number1 += 12; // аналогично действию number 1 = number1 + 12. Кратка запись

let number2 = 10;
number2 += 14; // 24

let number3 = 11;
number3 -= 1; // 10. минус 1 и присвоение нового значения

let number4 = 14;
number4 -= 14; // 0

let number5 = 4;
number5 *= 3; // 12. Аналогично, умножаем и присваиваем новое значение

let number6 = 10;
number6 *= 7; // 70

let number7 = 100;
number7 /= 50; // 2. Аналогично, делим и присваиваем новое значение

let number8 = 20;
number8 /= 5; // 4

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // косая черта \ пишется для игнорирования кавычек

const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>'; // использование разного вида кавычек как решение

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; // другие спец. символы \n новая строка, \t табуляция

const myStr3 = "This is the start. " + "This is the end."; // конкатенация (объединение) строк с помощью +. Не забывать про пробел

let myStr4 = "This is the first sentence. "; // объявляем переменную myStr4 с строкой
myStr4 += "This is the second sentence."; // краткой записью добавления и присвоения значения делаем конкатенацию

const myName2 = "Dmitry"; //объявление переменной myName с значением 'Dmitry'
const myStr5 = "My name is " + myName2 + " and I am well!"; // конкатенация строк вместе с переменной. Не забывать про пробелы

const someAdjective = "cool!";
let myStr6 = "Learning to code is ";
myStr6 += someAdjective; // конкатенация строк с помощью переменной

let myStr7 = "Hello World!"; // объявление переменной с значением
console.log(myStr7.length); // 12. с помощью метода lenght можно узнать длинну строки (кол-во символов). ! и пробел также считается за символ

let myStr8 = "Hello"; // Задаем переменную с значением
let firstChar = myStr8[0] // обращаемся к первому элементу myStr8


let myStr9 = "Bob";
myStr9[0] = "J"; // НЕ РАБОТАЕТ. Строки невозможно заменить частично
myStr9 = "Job"; // только полностью перезаписать

let myStr10 = "Hello World";
let lastCharInMyStr10 = myStr10[myStr10.length - 1]; // d // Узнаем последним символ через длинну строки - 1

const myArray = ["Dmitry", 22]; // массив данных
const myArray2 = [["hello", 1], ["World", 2]]; // массивы внутри массива

const myArray3 = [50, 60, 70]; // объявление переменной в которой массив
let myData = myArray3[0]; //обращение к первому элементу массива через индекс

const myArray4 = [18, 64, 99]; 
myArray4[0] = 45; // в отличие от строк, данные в массиве можно перезаписать при обращении к индексу. Даже если массив объявлен через const

const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[3][0][1]; //11 // обращаемся к 3 элементу общего массива, выбираем внутренний массив (нулевой элемент), и цифру 11 индекс 1 массива

const myArray6 = [
  ["John", 23],
  ["cat", 2],
];
myArray6.push(["dog", 3]); // с помощью метода push в конец массива мы можем добавлять значения

const myArray7 = [1, 2, 3, 4];
myArray7.push(5, 6, 7); // теперь myArray7 выглядит так [1, 2, 3, 4, 5, 6, 7]

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); //метод pop удаляет последний элемент массива. Может извлечь строки, числа и вложенные массивы
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift(); // аналогично с pop удаляет элемент массива, но первый.
console.log(removedFromOurArray) // "Stimpson"

const myArray8 = [
  ["John", 23],
  ["dog", 3],
];
myArray8.unshift(["Paul", 35]); // метод unshift добавляет в начало массива значение. Аналогично с Push, но в начало


function reusableFunction() { // объявление функции
  console.log("Hi World"); // тело функции
}

reusableFunction(); // вызов функции

function functionWithArgs(paramOne, paramTwo) { // в функции можно определить параметры. Значения, которые функция будем принимать
  console.log(paramOne + paramTwo); //действия с параметрами
}
functionWithArgs(1, 2); // 1, 2 аргументы функции, которые передаются ей в параметры

function plusThree(num) { //параметр число
  return num + 3; // принимаемое число в параметре увеличиваем на 3 и ВОЗВРАЩАЕМ с помощью return
}

const answer = plusThree(5); // answer будет содержать 8. 5 передали в аргументе функции и функция вернула 8 (5+3)