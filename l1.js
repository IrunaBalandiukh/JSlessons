/* //-----task1---------
let string1 ="Hello";
let string2 ="owu";
let string3 ="ua";
let numb1 = 1;
let numb2 = 10;
let numb3 = -999;
let numb4 = 3.14;
let bool1 = true;
let bool2 = false;
console.log(string1);
console.log(string2);
console.log(string3);
console.log(numb1);
console.log(numb2);
console.log(numb3);
console.log(numb4);
console.log(bool1);
console.log(bool2);
alert(string1);
alert(string2);
alert(string3);
alert(numb1);
alert(numb2);
alert(numb3);
alert(numb4);
alert(bool1);
alert(bool2);
document.write(string1);
document.write("<br>"+ string2);
document.write("<br>"+string3);
document.write("<br>"+numb1);
document.write("<br>"+numb2);
document.write("<br>"+numb3);
document.write("<br>"+numb4);
document.write("<br>"+bool1);
document.write("<br>"+bool2);

//-------task2--------
string1 ="Welcome";
string2 ="javascript";
string3 ="lviv";
numb1 = 5;
numb2 = -3.56;
numb3 = 4;
numb4 = 0.14;
bool1 = false;
bool2 = false;
console.log(string1);
console.log(string2);
console.log(string3);
console.log(numb1);
console.log(numb2);
console.log(numb3);
console.log(numb4);
console.log(bool1);
console.log(bool2);
alert(string1);
alert(string2);
alert(string3);
alert(numb1);
alert(numb2);
alert(numb3);
alert(numb4);
alert(bool1);
alert(bool2);
document.write("<br>"+string1);
document.write("<br>"+string2);
document.write("<br>"+string3);
document.write("<br>"+numb1);
document.write("<br>"+numb2);
document.write("<br>"+numb3);
document.write("<br>"+numb4);
document.write("<br>"+bool1);
document.write("<br>"+bool2);

//-------task3---------
const str1 = "Iruna"
const str2 = "red"
const str3 = "ukr"
const n1 = 24
const n2 = 0
const n3 = 1
console.log(str1)
console.log(str2)
console.log(str2)
console.log(n1)
console.log(n2)
console.log(n3)
document.write("<br>"+str1)
document.write("<br>"+str2)
document.write("<br>"+str3)
document.write("<br>"+n1)
document.write("<br>"+n2)
document.write("<br>"+n3)
alert(str1)
alert(str2)
alert(str3)
alert(n1)
alert(n2)
alert(n3) 
//-------task4,5,6------
let name = prompt("Ведіть своє ім'я:");
let middlename = prompt("по батькові ");
let lastname = prompt("прізвище ");
console.log(name);
console.log(middlename);
console.log(lastname);
alert(name);
alert(middlename);
alert(lastname);
document.write("<br>"+name);
document.write("<br>"+middlename);
document.write("<br>"+lastname);
let person = "<br>"+ name + " " + middlename + " " + lastname;
document.write(person); 

//------task7-----
let a1 = +prompt("число1");
let a2 = +prompt("число2");
let a3 = +prompt("число3");
console.log(a1);
console.log(a2);
console.log(a3); 

//-----task8------
let b1 = parseInt(prompt("число1"));
let b2 = parseInt(prompt("число2"));
let b3 = parseInt(prompt("число3"));
let b4 = parseInt(prompt("число4"));
let result = b1+b2+b3+b4
console.log(result); 

//-----task9,10-------
let c1 = parseFloat(prompt("число1"));
let c2 = parseFloat(prompt("число2"));
let c3 = parseFloat(prompt("число3"));
let result1 = c1+c2+c3
console.log(result1);

let result2 = Math.round(c1)+Math.round(c2)+Math.round(c3);
console.log(result2); 

//----task11------
let d1 = parseInt(prompt("число 1"));
let d2 = parseInt(prompt("число 2"));
let result3 = Math.pow(d1 , d2);
console.log(result3); 

//-----task12----
let a = 100; 
let b = '100';
let c = true; 
let d = undefined;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d); 

//-----task13-----
console.log(5 < 6);
console.log(5 == 6);
console.log(5 > 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 >= 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 != 10);
console.log(123 === "123");
console.log(123 == "123"); 

//-----task14------
console.log(132 > 100 && 45 < 12 );
console.log(34 > 33 && 23 < 90 );
console.log(99 > 100 && 45 > 12 );
console.log(132 > 100 || 45 < 12 );
console.log(111 > 11 || 45 < 111 );
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); 
console.log(!!'-1');
console.log(!!-1);
console.log(!!'0');
console.log(!!'null');
console.log(!!'undefined');
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0');
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); 

//------task15------
let str = "Привет";
let num = 123;
let flag = true;
let txt = "true";
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt); 

//----task16-------
let e1 = 5 + 3;
let e2 = 5-3;
let e3 = 5 * 3;
let e4 = 5 / 3;
let e5 = 5 % 3;
console.log(e1);
console.log(e2);
console.log(e3);
console.log(e4);
console.log(e5); 

//------task17------
let e6 = 5 % 3;
let e7 = 3 % 5;
let e8 = 5 + "3";
let e9 = "5" - 3;
let e10 = 75 + "кг";
console.log(e6);
console.log(e7);
console.log(e8);
console.log(e9);
console.log(e10); 

//----task18-------
let height = 23;
let width = 10;
let s = height * width;
console.log(s);

//-------task19----------
let heightC = 10;
let dC = 4;
let v = (3.14 * Math.pow((dC/2), 2)) * heightC;
console.log(v)

//------task20----------
let n = 3;
let m = 4;
let k = Math.sqrt( Math.pow(n , 2) + m**2 ) ;
console.log(k);

//------task21,22,23----------
let str1 = "Кто " ;
let str2 = "ты " ;
let str3 = "такой?" ;
let concatenation = str1 + str2 + str3;
document.write(concatenation);

let str4 = "20";
let aa = 5;
document.write("<br/>" + str4 + aa + "<br/>");
document.write(str4 - aa + "<br/>");
document.write(str4 * "2" + "<br/>");
document.write(str4 / 2 + "<br/>");

console.log(parseInt("3.14"));
console.log(parseInt("-7.875"));
console.log(parseInt("435"));
console.log(parseInt("Вася")); 

//-----task24-------
let number1 = +prompt("введіть число 1");
let number2 = +prompt("введіть число 2");
alert(number1+number2); 

//-------task25-------
let FirstName = prompt("Введіть ім'я");
let LastName = prompt("Введіть прізвище");
let Age = prompt("Введіть вік");
alert( "Доброго вечора, " + FirstName + " " + LastName + ", мої вітання, що Вам " + Age );


//-----task26------
let numBer1 = prompt("введіть число 1");
let numBer2 = prompt("введіть число 2");
let numBer3 = prompt("введіть число 3");
if (numBer1 > numBer2) {
    let x = numBer1;
    numBer1 = numBer2;
    numBer2 = x;
} else if (numBer2 > numBer3) {
    let x = numBer2;
    numBer2 = numBer3;
    numBer3 = x;
}

document.write(numBer1, numBer2, numBer3); 

//--------task27--------------
let light = prompt("Введіть колір світлофора ");
if (light == "зелений") {
    alert("можна йти");
} else if (light == "жовтий") {
    alert("чекай");
} else if (light == "червоний") {
    alert("стій");
} else {
    alert("роби як знаєш)")
}  */

//-------task28---------

let light1 = prompt("Введіть колір світлофора ");
let isRoadClear = confirm("Чи є машини на дорозі?");
 if (light1 == "зелений" && isRoadClear == false) {
    alert("можна йти");
} else if (light1 == "зелений" && isRoadClear == true) {
    alert("зачекай поки порушники проїдуть")
} else if (light1 == "жовтий" && isRoadClear == false) {
    alert("все одно чекай");
} else if (light1 == "жовтий" && isRoadClear == true) {
    alert("чекай");
}else if (light1 == "червоний" && isRoadClear == false) {
    alert("все одно стій");
}else if (light1 == "червоний" && isRoadClear == true) {
    alert("стій");
} else {
    alert("роби як знаєш)") 
}