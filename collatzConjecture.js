function collatzConjecture(N) {
    var sequence = [N];
  
    while (N !== 1) {
      if (N % 2 === 0) {
        N = N / 2;
      } else {
        N = N * 3 + 1;
      }
      sequence.push(N);
    }
  
    return sequence.join(' ');
  }
  
  const n = parseInt(readline());
  var result = collatzConjecture(n);
  console.log(result);
  


  /**________________________________________________________________ */

  