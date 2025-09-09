// 1.Find the subarray with the maximum sum (Kadane’s Algorithm).

// let arr = [1,4,-5,8,3,-1,7]
// function kadanAlgo (arr) {

//     let max = -Infinity;
//     let sum = 0;
//     let n = arr.length;

//     for(let i=0; i < n; i++) {
//         sum += arr[i];

//         if(sum > max) {
//             max = sum;
//         }

//         if(sum < 0) {
//             sum = 0;
//         }
//     }
//     return max;
// }

// console.log(kadanAlgo(arr));



// 2.Rearrange an array so that positive and negative numbers are placed alternately.

// let arr = [2, -4, 8, 1, -9, -2, 5];

// function rearrangeAlternate(arr) {
//   let pos = [];
//   let neg = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       pos.push(arr[i]);
//     } else {
//       neg.push(arr[i]);
//     }
//   }
//   let result = [];
//   let i = 0, j = 0;

//   while (i < pos.length && j < neg.length) {
//     result.push(pos[i++]); 
//     result.push(neg[j++]); 
//   }
//   while (i < pos.length) {
//     result.push(pos[i++]);
//   }
//   while (j < neg.length) {
//     result.push(neg[j++]);
//   }

//   return result;
// }

// console.log(rearrangeAlternate(arr));


// 3. Merge two sorted arrays without using extra space.

// arr1 = [1, 4, 7, 8, 10]  
// arr2 = [2, 3, 9]

// function MergeSortedArray (arr1,arr2) {

//   i = 0
//   j = 0

//   while (i < arr1.length && j < arr2.length) {
//     arr1.push(arr2[j])
//     i ++
//     j ++
//   }


//   for (let i = 0; i < arr1.length; i++){
//     for (let j=0; j < arr1.length-1; j++){
//     if (arr1[j] > arr1[j + 1]) {
//       [arr1[j],arr1[j+1]] = [arr1[j+1],arr1[j]]

//     }
//   }
// }
// return arr1
// }

// console.log(MergeSortedArray(arr1,arr2))


// // 4. Move all zeroes to the end of the array while maintaining order.

// let arr = [0, 2, 40, 8, 0, 0, 5, 4, 6, 7, 0];

// function MoveZero(arr) {
//   let insertPos = 0; 

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       [arr[i], arr[insertPos]] = [arr[insertPos], arr[i]];
//       insertPos++;
//     }
//   }

//   return arr;
// }

// console.log(MoveZero(arr));


// // 5. Find the longest consecutive sequence in an unsorted array.

// let arr = [100, 4, 200, 1, 3, 2];

// function longestConsecutive(arr) {
//   let numSet = new Set(arr);
//   let maxLength = 0;

//   for (let num of numSet) {
//     if (!numSet.has(num - 1)) {
//       let currentNum = num;
//       let length = 1;

//       while (numSet.has(currentNum + 1)) {
//         currentNum++;
//         length++;
//       }

//       maxLength = Math.max(maxLength, length);
//     }
//   }

//   return maxLength;
// }

// console.log(longestConsecutive(arr)); 
