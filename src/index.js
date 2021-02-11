module.exports = function check(str, bracketsConfig) {
  let open = [];
  let close = [];
  for(let i=0; i<bracketsConfig.length; i++){
    open.push(bracketsConfig[i][0]);
    close.push(bracketsConfig[i][1]);
  }
  let stack = [];   
    for(let i=0; i<str.length; i++){
      if(close.includes(str[i]) && stack.length>0 && close.indexOf(str[i]) === open.indexOf(stack[stack.length-1]))
      {
        stack.pop();
      }else if(open.includes(str[i])){
        stack.push(str[i]);
      }else{
        return false;
      }   
    }
  return stack.length === 0; 
}
