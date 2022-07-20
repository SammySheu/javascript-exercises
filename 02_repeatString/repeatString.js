const repeatString = function(string, num) {
  if(num<0) return "ERROR";
  let response = "";
  for(let i=0 ; i<num ; i++){
    response += string;
  }
  // console.log(response);
  // alert(response);
  return response;
};

// Do not edit below this line
module.exports = repeatString;
