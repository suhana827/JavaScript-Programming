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

let arr = [2, -4, 8, 1, -9, -2, 5];

function rearrangeAlternate(arr) {
  let pos = [];
  let neg = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

 
  let result = [];
  let i = 0, j = 0;

  while (i < pos.length && j < neg.length) {
    result.push(pos[i++]); 
    result.push(neg[j++]); 
  }


  while (i < pos.length) {
    result.push(pos[i++]);
  }

  while (j < neg.length) {
    result.push(neg[j++]);
  }

  return result;
}

console.log(rearrangeAlternate(arr));
