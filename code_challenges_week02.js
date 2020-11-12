// Week 2

// 1
var multiples3or5 = function(){
    let sum = 0;
    for(let i=0; i<1000; i++){
        if (i%3 === 0 || i%5 === 0){
            sum+=i;
        }
    }
// answer = 233168
    return sum;
}

// 2
function findOdd(A) {
    let res = 0;
    for(let i=0; i<A.length; i++){
        //using XOR to remove need for extra space
      res = res ^ A[i];
    }
    return res;
  }

  // 3
  function count (string) { 
    let result = {};
    if(string==="")return result;
    for(let i=0; i<string.length; i++){
      result[string[i]] = (result[string[i]] || 0) + 1;
    }
     return result;
  }

  // 4
  function evenFibSum(){
    var sum = 0;
    var firstNum = 1;
    var secondNum = 1;

    while (secondNum < 4000000) {
    secondNum = firstNum + secondNum;
    firstNum = secondNum - firstNum;
    sum += secondNum % 2 === 0 ? secondNum : 0;

   }
// answer : 4613732
    console.log(sum);
}

// 5
var numberOfSteps  = function(num) {
    var steps = 0;
    while (num > 0) {
        if (num % 2 == 0) {
            num = num / 2;
            steps++;
        } else {
            num--;
            steps++;
        }
    }
    return steps;
};

// 6
var subtractProductAndSum = function(n) {
    const digits = n.toString()
    let sum = 0, product = 1
    for (let digit of digits) {
        sum += Number(digit)
        product *= Number(digit)
    }
    return product - sum
};

// 7
function valAndUnits(s){
    let units = [];
    let answer = {};
    for(let i=0; i<s.length; i++){
        if(s.charCodeAt(i) <=122 && s.charCodeAt(i) >=97 || s[i] === '%'){
            units.push(s[i]);
        }
    } 
   answer.val = parseFloat(s);
   answer.units = units.toString().replace(/,/g, '');
   return answer;
}
// refactored solution :
function valAndUnits(s) {
  var val = parseFloat(s);
  return {
    val: val,
    units: s.replace(val, '').trim()
  }
}
