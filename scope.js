
let bonus = 20;     // let or const হইল স্কোপ  ভেরিয়েব এরা  ব্রাকেটের ভিতরে থাকে এবং তারা তার আগের পজিশন দিক্লার করা আছে তার উপরে জায়
 // var ta hoilo amon je se function ar modhe bolbot thake abong tare dicler korar age jodi resul jante chawa hoy mane console.log()kora hoi kisu mind kore na sudhu undefined dekhabe kintu error dibe na
function sum (first, second){
    let result = first + second + bonus;
    return result;
}
const output=sum(3, 7);
console.log(bonus);
console.log(output);