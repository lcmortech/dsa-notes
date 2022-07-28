const mostFrequentChar = (s) => {
  let count = {};
  
  for(let char of s){
    if(!(char in count)) { //in==key in obj
      count[char] = 0;
    }

    count[char] += 1;
  }
  
  let freqChar = null;
  for(let char of s){
    if(freqChar === null || count[char] > count[freqChar]){
      freqChar = char;
    }
  }
  return freqChar;
};

module.exports = {
  mostFrequentChar,
};
