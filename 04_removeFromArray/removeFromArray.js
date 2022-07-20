const removeFromArray = function(array, ...target) {
  let answer = [];
  function searchReplace(element, index, arr){
    let check = 0;
    for(let i=0 ; i<target.length ; i++){
      if(element === target[i]){
        check++ ;
        break;
      }
    }
    if(!check)
      answer.push(element);
    check = 0;
  }
  // let array = [1, 2, 3, 4];
  // let target = [3, 2];
  array.forEach( searchReplace, target );
  console.log(answer) ;
  return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
//
// let answer = [];
//
// function searchReplace(element, index, arr){
//   let check = 0;
//   for(let i=0 ; i<target.length ; i++){
//     // console.log("value i = " + i + " " + element) ;
//     if(element == target[i]){
//       check++ ;
//       // console.log("here I am") ;
//       break;
//       // array.splice(index,1) ;
//     }
//   }
//   if(!check){
//     // console.log("push answer\n");
//     answer.push(element);
//     // console.log(answer);
//   }
//   check = 0;
// }
// let array = [1, 2, 3, 4];
// let target = [3, 2];
// // console.log(target.length, array);
// array.forEach( searchReplace, target );
// console.log(answer) ;
