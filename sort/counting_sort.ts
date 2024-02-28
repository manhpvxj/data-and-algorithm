function countingSort(array: number[], size: number) {
  let output: number[] = new Array<number>(size + 1);

  let max = array[0];
  // find max of array
  for (let i = 0; i < size; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  let count: number[] = new Array<number>(max + 1);
  for (let i = 0; i < max + 1; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < max + 1; i++) {
    count[array[i]]++;
  }

  for (let i = 1; i < max + 1; i++) {
    count[i] += count[i - 1];
  }

  for (let i = size - 1; i >= 0; i--) {
    output[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  for (let i = 0; i < size; i++) {
    array[i] = output[i];
  }
}

function mainCountingSort() {
  let array: number[] = [3, 0, 1, 2, 5, 4, 7, 9, 8, 6];
  const size = array.length;
  console.log("current array:", array);
  countingSort(array, size);
  console.log("sorted array:", array);
}

mainCountingSort();
