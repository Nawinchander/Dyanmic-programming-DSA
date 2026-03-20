
// Longest Increasing Subsequence (LIS) — O(n log n)

// Instead of DP O(n²), optimize using binary search + greedy

// Maintain an array tails[]

// tails[i] = smallest ending element of an increasing subsequence of length i+1


function lengthOfLIS(nums) {
  let tails = [];

  for (let num of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    tails[left] = num;
  }

  return tails.length;
}

// Example
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); // 4


// Complexity:
// Time: O(n log n)
// Space: O(n)


