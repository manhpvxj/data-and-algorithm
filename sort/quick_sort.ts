// find the partition position
function partition(array: number[], start: number, end: number): number {
  // find the most right position
  const pivot = array[end];

  // pointer to the greater position
  let i: number = start - 1;

  for (let j = start; j < end; j++) {
    // if element is smaller than the pivot, swap element with element greater than pointer by i
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  // swap the pivot element with the greater element specified by i
  [array[i + 1], array[end]] = [array[end], array[i + 1]];

  return i + 1;
}

function quickSort(array: number[], start: number, end: number) {
  if (start < end) {
    // find the partition index
    const pi = partition(array, start, end);

    quickSort(array, start, pi - 1);

    quickSort(array, pi + 1, end);
  }
}

function mainQuickSort() {
  let array: number[] = [3, 0, 1, 2, 5, 4, 7, 9, 8, 6];
  console.log("current array:", array);
  const size = array.length;
  quickSort(array, 0, size - 1);
  console.log("sorted array:", array);
}

mainQuickSort();
