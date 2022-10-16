/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  output = [];

  if (nums.length < 4) {
    return [];
  }

  for (let x = 0; x < nums.length; x++) {
    // this is valid because the nums is sorted. if 4 consecutive nums in a sorted array gives the result we need no need to check any further.
    if (nums[x] + nums[x + 1] + nums[x + 2] + nums[x + 3] > target) {
      break;
    }
    if (
      nums[x] == 0 &&
      nums[x + 1] == 0 &&
      nums[x + 2] == 0 &&
      nums[x + 2] == 0 &&
      target == 0
    ) {
      output.push([0, 0, 0, 0]);
      break;
    }
    if (x > 0 && nums[x] == nums[x - 1]) {
      continue;
    }

    if (
      nums[x] +
        nums[nums.length - 3] +
        nums[nums.length - 2] +
        nums[nums.length - 1] <
      target
    ) {
      continue;
    }

    for (let y = x + 1; y < nums.length; y++) {
      if (nums[x] + nums[y] + nums[y + 1] + nums[y + 2] > target) {
        break;
      }
      if (nums[y] == nums[y - 1] && y === x + 1) {
        continue;
      }
      if (
        nums[x] + nums[y] + nums[nums.length - 2] + nums[nums.length - 1] <
        target
      ) {
        continue;
      }

      let leftPointer = y + 1;
      let rightPointer = nums.length - 1;

      while (leftPointer < rightPointer) {
        let sumOfFour =
          nums[x] + nums[y] + nums[leftPointer] + nums[rightPointer];

        if (sumOfFour > target) {
          rightPointer--;
        } else if (sumOfFour < target) {
          leftPointer++;
        } else {
          let temp = [nums[x], nums[y], nums[leftPointer], nums[rightPointer]];
          output.push(temp);

          while (
            nums[leftPointer] === nums[leftPointer + 1] &&
            leftPointer < rightPointer
          ) {
            leftPointer++;
          }
          while (
            nums[rightPointer] === nums[rightPointer - 1] &&
            leftPointer < rightPointer
          ) {
            rightPointer--;
          }

          leftPointer++;
          rightPointer--;
        }
      }
    }
  }

  return output;
}

nums = [1, 0, -1, 0, -2, 2];
nums2 = [2, 2, 2, 2, 2];
nums3 = [2, 4, 0, 4, -3, -3]; //-3,-3,0,2,4

nums4 = [-2, -1, -1, 1, 1, 2, 2]; //0
nums5 = [-2, -1, -1, 1, 1, 2, 2];
target = 0;

console.log(fourSum(nums4, target));
