export const solution = (pattern: string, source:string): number => {
    let sumMateches = 0;
  
    for (let i = 0; i <= source.length -(pattern.length); i++) {
      const pattNums = i + pattern.length;
  
      let hasMatchedPattern = true;
      
      for (let j = 0; j < pattern.length; j++) {
        const char = source[i+j];
        const patt = pattern[j]
  
        if(!matchChar(patt, char)) {
          hasMatchedPattern = false
          break;
        }
      }
  
      if(hasMatchedPattern) {
        sumMateches ++
      }
    }
  
    return sumMateches;
  }
  
  
  function isVowel(char: string) {
    return /^[aeiouAEIOU]$/.test(char);
  }
  
  const matchChar = (pattern: string, char: string): boolean => {
    if (pattern === '0') {
      return isVowel(char);
    } else if (pattern === '1') {
      return !isVowel(char);
    }
    return false;
  }
  
  console.log(solution("010",  "amazing"));
  