const Calculate = {
    factorial(num) {
      for (let i = num -1; i>=1; i--){
        num*= i;
      }
      if (num === 0) {
        return 1;
      }
      return num;
    }
  }
  module.exports = Calculate;
  
  
  