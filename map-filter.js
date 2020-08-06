const numbers = [3, 4, 5, 6, 7, 8];

const output=[];
for (let i = 0; i<numbers.length; i++){
    const element=numbers[i];
    const result = element * element;
    output.push(result);
}

function square(element){
    return element * element;
}
numbers.map(function(element,index,arry){
    console.log(element,index,arry);
})

function square(element){
    return element * element;
}
const square = element => element * element;
const square = x => x * x;
const result=numbers.map(function(element){
    return element * element;
})
const result = numbers.map(x => x * x);
 console.log(result);

// // filter -style

const bigger = numbers.filter( x => x >5);
console.log(bigger);
const bigger = numbers.filter( x => x <3);
console.log(bigger);

// // find -style

const isThere = numbers.find(x => x <3); // no result show this is difarent filter and find
console.log(isThere);

 const isThere = numbers.find( x => x >5);
 console.log(isThere);