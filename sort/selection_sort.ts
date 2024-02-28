function selectionSort(array: number[]) {
  const size: number = array.length;

  for (let i = 0; i < size; i++) {
    let minIndex: number = i;
    for (let j = minIndex + 1; j < size; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]];
  }
}

function mainSelectionSort() {
  let array: number[] = [3, 0, 1, 2, 5, 4, 7, 9, 8, 6];
  console.log("current array:", array);
  selectionSort(array);
  console.log("sorted array:", array);
}

mainSelectionSort();
