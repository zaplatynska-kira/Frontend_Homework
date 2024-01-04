
res = sumDigits(1234); // 1 + 2 + 3 + 4 = 10
console.log(`res = ${res}`);

function sumDigits(n) {
    let nums = n.toString(); 
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += +nums[i];
    }
    return sum;
}

 res = luckyNumber(123871); 
 console.log(res ? 'Lucky' : 'Unlucky');
 
 function luckyNumber(n) {
    let nums = n.toString(); 
    let firstThreeDigits = nums.slice(0, 3); 
    let lastThreeDigits = nums.slice(-3); 
    
    return firstThreeDigits === lastThreeDigits;
}


// // ADVANCED
// function banana() {
//     let a = 'a';
//     let b = 'b';
//     // TODO: 'b', 'a' => banana
// }