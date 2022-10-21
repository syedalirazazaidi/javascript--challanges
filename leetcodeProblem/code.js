// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j]
//       }
//     }
//   }
// }

// console.log(twoSum([3, 3, 4, -1, 3], 7))

var isPalindrome = function (x) {
  const y = x.toString().split('').join()
  const yx = x.toString().split('').reverse().join()
  if (y === yx) {
    return true
  } else {
    return false
  }
}
isPalindrome(121)
