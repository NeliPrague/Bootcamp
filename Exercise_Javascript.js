//1) Projdi čísla 1 až 15, pro každé vypiš, jeslti je číslo sudé nebo liché.
for (i=1; i<=15; i++)
{
  if(i%2 == 0){
    console.log("number " + i + " is even");
  } else {
    console.log("number " + i + " is odd");
  }
}

//2) Je zadané pole čísel var numbers = [2, 5, 3, 11, -3, 4, 5, -6, 10, 3];
var numbers = [2, 5, 3, 11, -3, 4, 5, -6, 10, 3];
//2A) Najdi a vypiš nejmenší číslo
console.log("Minimum number is: " + Math.min(...numbers));
//2B) Najdi a vypiš největší číslo
console.log("Maximum number is: " + Math.max(...numbers));
//2C) Najdi čísla, která jsou v poli více než jednou, vypiš které to jsou.
var duplicate = null;
for (var i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) !== i) {
    duplicate = numbers[i];
    break; // stop cycle
  }
}
console.log("Multiple numbers are: " + duplicate); //Chybí ale 3

///2D) Na vstupu je kromě pole zadané číslo x. Zkontroluj jestli se hledané číslo x vyskytuje v poli numbers.
//Příklad vstupu: var x = 3; var x = 8;
var a = 3; var b = 8;
// console.log("numbers contains number 3" + numbers.indexOf(x)));
if(numbers.indexOf(a)>=0)
{
  console.log("numbers contains number " + a);
} else {
    console.log("numbers doesn't contain number " + a);
  }

  if(numbers.indexOf(b)>=0)
  {
    console.log("numbers contains number " + b);
  } else {
      console.log("numbers doesn't contain number " + b);
  }

//2E] Spočítej a vypiš součet hodnot v poli numbers.
// console.log("Total is: " + Math.sum(...numbers));
for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++]);
{
  console.log("Total is: " + sum)
}

// 3) Na vstupu je textový řetězec a hledaný znak. Z textového řetězce odstraň hledaný znak a výsledek ulož v jiné proměnné.
//vstupy:
var text = "rgj-rewre-rwerwe-rew-rwe";
var symbol = text.indexOf("-");
console.log("var result: " + text.substr(symbol-3,symbol)+text.slice(symbol+1,symbol+6)+text.slice(symbol+7,symbol+13)+text.slice(symbol+14,symbol+17)+text.slice(symbol+18,symbol.length));

// 4) Prázdné pole naplň druhými mocninami čísel 1 až 12. Použij metodu array.push()
//https://www.w3schools.com/jsref/jsref_push.asp

var exponentNumbers = [];
exponentNumbers.push(1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144);
console.log("var exponentNumbers = " + "[" + exponentNumbers+ "]");

// 5) Je zadaný poloměr kruhu   https://www.w3schools.com/jsref/jsref_obj_math.asp
// 5A) spočítej obvod kruhu

var radius = 4.0;
console.log("Circle circumference is: " + 2*Math.PI*radius);

//5B) spočítej obsah kruhu
console.log("Circle area is: " + Math.PI*(radius*radius));
