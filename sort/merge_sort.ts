function merge(array: number[], start: number, mid: number, end: number) {
  const sizeLeft = mid - start + 1;
  const sizeRight = end - mid;

  let array1: number[] = new Array<number>(sizeLeft);
  let array2: number[] = new Array<number>(sizeRight);
  // create copy of array
  for (let index = 0; index < sizeLeft; index++) {
    array1[index] = array[start + index];
  }

  for (let index = 0; index < sizeRight; index++) {
    array2[index] = array[mid + index + 1];
  }

  console.log(array1, array2);
  // current index of array1
  let i: number = 0;

  // current index of array2
  let j: number = 0;

  // current index of array
  let k: number = start;

  while (i < sizeLeft && j < sizeRight) {
    if (array1[i] <= array2[j]) {
      array[k] = array1[i];
      i++;
    } else {
      array[k] = array2[j];
      j++;
    }
    k++;
  }

  while (i < sizeLeft) {
    array[k] = array1[i];
    i++;
    k++;
  }

  while (j < sizeRight) {
    array[k] = array2[j];
    j++;
    k++;
  }
}

function mergeSort(array: number[], start: number, end: number) {
  console.log("start", start, "end", end);
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    console.log("mid", mid);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);

    merge(array, start, mid, end);
  }
}

function mainMergeSort() {
  let array: number[] = [3, 0, 1, 2, 5, 4, 7, 9, 8, 6];
  console.log("current array:", array);
  const size = array.length;
  mergeSort(array, 0, size - 1);
  console.log("sorted array:", array);
}

mainMergeSort();
