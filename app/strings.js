exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  },

  wordWrap: function(str, cols) {
    
  },

  reverseString: function(str) {
    let arr = str.split("")
    let rev = []
    for(let i=arr.length-1;i>=0;i--){
      rev.push(arr[i])
    }
    return rev.join("")
  }
};
