const compress = (s) => {
  let result = []
  let i = 0
  let j = 0
  
  while(j <= s.length){
    if(s[i] === s[j]){ //while there's a streak
      j += 1 //keep going through streak till j hits unequal
    } else { //chars NOT equal, terminated streak
      num = j - i //index j will be bigger number
      if(num === 1){
        result.push(s[i])
      } else{
      result.push(num, s[i])
      }
      i = j
  }
  }
  return result.join('')
};

console.log(compress('bbbaatttffer'))













module.exports = {
  compress
};