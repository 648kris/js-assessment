exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    fn(arr[0], arr[1], arr[2])
  },

  speak: function(fn, obj) {
    fn(obj)
  },

  functionFunction: function(str) {
    return function(s){
      return str+s
    }
  },

  makeClosures: function(arr, fn) {
    for(i=0;i<arr.length;i++){
      fn(arr[i])
    }
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
