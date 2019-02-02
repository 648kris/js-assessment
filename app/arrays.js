exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    let sum = 0 
    for (i=0;i<arr.length;i++){
      sum = sum +arr[i];
    }
    return sum
  },

  remove: function(arr, item) {
    function notItem(value) {
      return value !== item
    }
    let filtered = arr.filter(notItem)
    return filtered
  },

  removeWithoutCopy: function(arr, item) {
    let doubles = []
    for(i=0;i<arr.length;i++){
      for(j=0;j<arr.length;j++){
        if(arr[j] === arr[i] && j != i){
          doubles.push(arr[i])
        }
      }
    }
    function isDouble(value){
      if (doubles.indexOf(value) === -1){
        return value
      }
    }
    arr = arr.filter(isDouble)
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    arr = arr.slice(0, arr.length-1)
    return arr
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item)
    return arr
  },

  curtail: function(arr) {
    arr.splice(0, 1)
    return arr
  },

  concat: function(arr1, arr2) {
    let s = arr1.join(" ") + " " + arr2.join(" ")
    return s.split(" ")
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let counter = 0;
    for (i=0;i<arr.length;i++){
      if(arr[i] === item){
        counter++
      }
    }
    return counter
  },

  duplicates: function(arr) {
    
  },

  square: function(arr) {
    let squareMap = arr.map(x => x*x)
    return squareMap
  },

  findAllOccurrences: function(arr, target) {
    let allIndexes = []
    for(i=0;i<arr.length;i++){
      if(arr[i] === target){
        allIndexes.push(i)
      }
    }
    return allIndexes
  }
};