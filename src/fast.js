exports.fast = function(arr) {
  function sort(arr, left, right) {
    if (left >= right) {
      return arr;
    }
    var i = left,
      j = right,
      num = array[left];
    while (i != j) {
      while (array[j] >= num && j > i) j--;
      while (array[i] <= num && i < j) i++;
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    array[left] = array[i];
    array[i] = num;
    sort(array, left, i - 1);
    sort(array, i + 1, right);
  }

  return sort(arr, 0, arr.length - 1);
};
