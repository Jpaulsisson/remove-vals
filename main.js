////Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.


//Example: nums = [1, 2, 3, 3, 4, 5, 5, 6, 2] val = 2;
//output: [1, 3, 3, 4, 5, 5, 6, _, _]

/////first attempt////////

function removeVal(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      arr.splice(i, 1);
      i--;                                      /////// nailed it on the first go
    }
  }return arr.length;
}

console.log(removeVal([1, 2, 3, 3, 4, 5, 5, 6, 2], 2));
console.log(removeVal([0,1,2,2,3,0,4,2],2));