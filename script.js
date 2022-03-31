console.log('------------- # 5');
let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => { console.log("Вы согласились."); }, 
  () => { console.log("Вы отменили выполнение."); } 
);

console.log('------------- # 6');
let str = 'my-short-string';
let varSep = str.split('-');
console.log(varSep);

console.log('------------- # 7');
let varSep2 = ['JavaScript', 2015];
let str2 = varSep2.join(' ');
console.log(str2);

console.log('------------- # 8');
let users = [{id: 1, name: "Vic", age: 21},  {id: 2, name: "Petya", age: 30}, {id: 3, name: "Jon", age: 5}];
let usersFilt = users.filter(function(user) {
  return user.age <= 20;
});
console.log(usersFilt);

console.log('------------- # 9');
let names = users.map(item => item.name);
console.log(names); // [Vic, Petya, Jon]

console.log('------------- # 10');
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let arrItem = arr[i];

    if (arrItem < a || arrItem > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
let arr = [2, 4, 8, 11, 3, 5];
filterRangeInPlace(arr, 3, 8);
console.log(arr);

console.log('------------- # 11');
function strToMas(st, sep) {
  let str3 = st.split(sep);
  return str3;
}
console.log(strToMas('doing homework now', ' '));

console.log('------------- # 12');
function slArray(arr, startIndex, endIndex) {
  let slArr = arr.slice(startIndex, endIndex);
  return slArr;
}
let arrForArray = [5, 3, 8, 1];
console.log(slArray(arrForArray, 1, 4));
console.log(arrForArray);

console.log('------------- # 13');
function sum(...arg) {
  let result = 0;
  for (let i=0; i<arg.length; i++) {
    result += arg[i];
  }
  return result;
}
console.log(sum(1, 4, 5, 8));