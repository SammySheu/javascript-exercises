const sumAll = function(num1, num2) {
  let answer = 0 ;
  if(typeof(num1) == "number" && typeof(num2) == "number" && num1>0 && num2>0){
    if(num1>num2)
      [num1, num2] = [num2, num1];
    for(let i = num1; i<=num2 ; i++)
      answer += i ;
  }
  else
    return "ERROR";
  return answer;
};
// console.log( !isNaN("90") ) ;
// Do not edit below this line
module.exports = sumAll;
