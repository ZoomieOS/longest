module.exports = function longestConsecutiveLength(array) {
  
      if (array.length <= 1) {
          return array.length;
      }
  
      array.sort((a, b) => {
          return a - b;
      });
  
      var counter = 1;
      var sequences = [];
  
      for (var i = 0; i < array.length; i++) {
          if (array[i + 1] != array[i]) {
              if (array[i + 1] == array[i] + 1) {
                  counter++;
              } else {
                  sequences.push(counter);
                  counter = 1;
              }
          }
      }
  
      return Math.max.apply(Math, sequences);
  }