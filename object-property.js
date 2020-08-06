const students = [
    {id:21, name:'mynul islam'},
    {id:34, name:'mosiur rahman'},
    {id:41, name:'khulis islam'},
    {id:51, name:'listy islam'},
    {id:71, name:'musk islam'},
];
const name= students.map( s => s.name);
console.log(name);

const Ids = students.map( s => s.id);
console.log(Ids);
const bigger = students.filter(s => s.id>40);
console.log(bigger);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);