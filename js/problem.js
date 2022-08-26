// Problem one
let string1 = "abc";
let string2 = "de";

if(string1.length > string2.length) {
  console.log(`${string2}${string1}${string2}`)
} else {
  console.log(`${string1}${string2}${string1}`)
}

// Problem two
let arrayNum = [1, -4, 7, 20];
let summaNum = 0;

for(let i = 0; i < arrayNum.length; i++) {
  if(arrayNum[i] > 0) {
    summaNum = summaNum + Number(arrayNum[i]);
  }
}
console.log(summaNum);

// Problem three
let num = 10;
let arrayReverseNum = [];

for(let i = 1; i <= num; i++) {
  arrayReverseNum.unshift(i);
}
console.log(arrayReverseNum);

// Problem four
let stringVariable = "Assalomu alaykum do'stlarim jgfvb ysgb ydgtj";
let newArray = [];
let stringSeperate = stringVariable.split(" ");
newArray.push(stringSeperate);

let resArray = newArray.pop();
resArray.pop();
resArray.shift();
resArray.join(" ");

console.log(resArray.join(" "));

// Problem five
let arrayFiveProblem = [];

let add = (text, number) => {
  for (let i = 0; i < number; i++) {
    arrayFiveProblem.push(text);
  }
  console.log(arrayFiveProblem);
}

add('Alo', 8)