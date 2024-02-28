function bubbleSort(array: number[]) {
  const size = array.length;
  // loop to each element
  for (let i = 0; i < size - 1; i++) {
    let isSwapping: boolean = false;
    for (let j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwapping = true;
      }
    }
    // break if array is already sorted
    if (!isSwapping) {
      break;
    }
  }
}

function mainBubbleSort() {
  let array: number[] = [3, 0, 1, 2, 5, 4, 7, 9, 8, 6];
  console.log("current array:", array);
  bubbleSort(array);
  console.log("sorted array:", array);
}

mainBubbleSort();
