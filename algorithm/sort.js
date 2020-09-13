const bubbleSort = (arr) => {
  if (!arr || !arr.length) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[i]) {
        const tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

const insertSort = (arr) => {
  if (!arr || !arr.length) return arr;

  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && key < arr[j]) {
          arr[j + 1] = arr[j];
          j--;
      }
      arr[j + 1] = key;
  }

  return arr;
}

const insertSortII = (arr) => {
  if (!arr || !arr.length) return arr;

  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      let left = 0, right = j;

      while (left <= right) {
          let mid = left + (right - left) / 2 | 0;
          if (arr[mid] > key) {
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      for (let k = j; k >= left; k--) {
          arr[k + 1] = arr[k];
      }

      arr[left] = key;
  }
  return arr;
}

const quickSort = (arr) => {
  if (!arr || !arr.length) return arr;
  return quickSortPartition(arr, 0, arr.length - 1);
}

const quickSortPartition = (arr, left, right) => {
  if (left >= right) return;
  let key = arr[left];
  let low = left;
  let high = right;
  while (left < right) {
      while (left < right && arr[right] >= key) {
          right--;
      }
      if (left < right) {
          arr[left++] = arr[right];
      }

      while (left < right && arr[left] < key) {
          left++;
      }
      if (left < right) {
          arr[right--] = arr[left];
      }
  }
  arr[left] = key;

  quickSortPartition(arr, low, left - 1);
  quickSortPartition(arr, left + 1, high);

  return arr;
}

function counterSort(arr) {
  if (!arr || !arr.length) return arr;
  let counter = [];
  for (let item of arr) {
      if (counter[item]) {
          counter[item]++;
      } else {
          counter[item] = 1;
      }
  }

  arr = [];
  for (let i = 0; i < counter.length; i++) {
      while(counter[i]) {
          arr.push(i);
          counter[i]--;
      }
  }
  return arr;
}

function bucketSort(parr, num) {
  if (!parr || !parr.length || !num) return parr;

  let arr = Array.from(parr);
  let min = arr[0], max = arr[0];

  for (let item of arr) {
      if (min > item) min = item;
      if (max < item) max = item;
  }
  let _min = min;
  let increase = (max - min + 1) / num | 0;
  let bucket = [];

  for (let item of arr) {
      let i = 1;
      while (i <= num) {
         bucket[i - 1] = bucket[i - 1] ? bucket[i - 1]: [];
          if (min + increase >= item && item >= min) {
              bucket[i - 1].push(item);
              break;
          } else {
              min = min + increase + 1;
              i++;
          }
      }
      min = _min;
  }
  arr = [];
  for (let row of bucket) {
      for (let i = 1; i < row.length; i++) {
          let curr = row[i];
          let j = i - 1;
          while (j >= 0 && curr < row[j]) {
              row[j + 1] = row[j];
              j--;
          }
          row[j + 1] = curr;
      }
     arr = arr.concat(row);
  }
  return arr;
}

function bucketSort2(parr, num) {
  if (!parr || !parr.length || !num) return parr;

  let arr = Array.from(parr);
  let min = arr[0], max = arr[0];

  for (let item of arr) {
      if (min > item) min = item;
      if (max < item) max = item;
  }
  let bucket = [];

  for (let item of arr) {
      let index = (item - min) / num | 0;
      bucket[index] =  bucket[index] ? bucket[index]: []
      bucket[index].push(item);
  }
  arr = [];
  for (let row of bucket) {
      if (!row) row = [];
      for (let i = 1; i < row.length; i++) {
          let curr = row[i];
          let j = i - 1;
          while (j >= 0 && curr < row[j]) {
              row[j + 1] = row[j];
              j--;
          }
          row[j + 1] = curr;
      }
      arr = arr.concat(row);
  }
  return arr;
}
