function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = true;
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) result = false;
    }
  }
  else result = false;

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(function(item){
    return item > 0 && item % 3 == 0;
  });
  resultArr = resultArr.map(item => item * 10);

  return resultArr; // array
}
