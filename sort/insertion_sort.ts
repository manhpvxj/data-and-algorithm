function insertionSort(array: number[]) {
  const size: number = array.length;

  for (let i = 0; i < size; i++) {
    // mark current element as a key
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j];
      --j;
    }
    array[j + 1] = key;
  }
}

function mainInsertionSort() {
  let array: number[] = [3, 0, 1, 2, 5, 4, 7, 9, 8, 6];
  console.log("current array:", array);
  insertionSort(array);
  console.log("sorted array:", array);
}

mainInsertionSort();
