function stopWatch(){
    let count= 0;            // কোণও একটা function কে আরেকটা function দারা কল অথবা রিটার্ন করি তাহলে সেটা closure বা closed inverment
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());    // জখন আমরা ভিন্ন ভিন্ন variable ra tader nijosso akta value rakhbe জামন clock1 or clock2 er redult

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
