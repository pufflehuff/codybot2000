/* eslint-disable*/

module.exports = [
  {
      "_id": "62784b90b32711d9610f14a3",
      "name": "Contains Duplicate",
      "prompt": "Given an integer array ```nums```, return ```true``` if any value appears **at least twice** in the array, and return ```false``` if every element is distinct.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [1,2,3,1]",
              "output": "true",
              "explanation": null
          },
          {
              "input": "nums = [1,2,3,4]",
              "output": "false",
              "explanation": null
          },
          {
              "input": "nums = [1,1,1,3,3,4,3,2,4,2]",
              "output": "true",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 10⁵```",
          "```-10⁹ <= nums[i] <= 10⁹```"
      ],
      "tags": [
          "Array",
          "Hash Table",
          "Sorting"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-07",
      "author": "leetcode"
  },
  {
      "_id": "62795489f320beb84aa73231",
      "name": "Two Sum",
      "prompt": "Given an array of integers ```nums``` and an integer ```target```, return *indices of the two numbers such that they add up to* ```target```.\n\nYou may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.\n\nYou can return the answer in any order.",
      "parameters": [
        "nums",
        "target"
      ],
      "examples": [
          {
              "input": "nums = [2,7,11,15], target = 9",
              "output": "[0,1]",
              "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
          },
          {
              "input": "nums = [3,2,4], target = 6",
              "output": "[1,2]",
              "explanation": null
          },
          {
              "input": "nums = [3,3], target = 6",
              "output": "[0,1]",
              "explanation": null
          }
      ],
      "constraints": [
          "```2 <= nums.length <= 10⁴```",
          "```-10⁹ <= nums[i] <= 10⁹```",
          "```-10⁹ <= target <= 10⁹```",
          "Only one valid answer exists."
      ],
      "tags": [
          "Array",
          "Hash Table"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62795604f320beb84aa73234",
      "name": "Best Time to Buy and Sell Stock",
      "prompt": "You are given an array ```prices``` where ```prices[i]``` is the price of a given stock on the ```ith``` day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return ```0```.",
      "parameters": [
        "prices"
      ],
      "examples": [
          {
              "input": "prices = [7,1,5,3,6,4]",
              "output": "5",
              "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell."
          },
          {
              "input": "prices = [7,6,4,3,1]",
              "output": "0",
              "explanation": "In this case, no transactions are done and the max profit = 0."
          }
      ],
      "constraints": [
          "```1 <= prices.length <= 10⁵```",
          "```0 <= prices[i] <= 10⁴```"
      ],
      "tags": [
          "Array",
          "Dynamic Programming"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62795a5cf320beb84aa73237",
      "name": "Product of Array Except Self",
      "prompt": "Given an integer array ```nums```, return an array ```answer``` such that ```answer[i]``` *is equal to the product of all the elements of* ```nums``` except ```nums[i]```.\n\nThe product of any prefix or suffix of ```nums``` is **guaranteed** to fit in a **32-bit** integer.\n\nYou must write an algorithm that runs in ```O(n)``` time and without using the division operation.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [1,2,3,4]",
              "output": "[24,12,8,6]",
              "explanation": null
          },
          {
              "input": "nums = [-1,1,0,-3,3]",
              "output": "[0,0,9,0,0]",
              "explanation": null
          }
      ],
      "constraints": [
          "```2 <= nums.length <= 10⁵```",
          "```-30 <= nums[i] <= 30```",
          "The product of any prefix or suffix of ```nums``` is **guaranteed** to fit in a **32-bit** integer."
      ],
      "tags": [
          "Array",
          "Prefix Sum"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627964092c3be4f0cac8f41e",
      "name": "Maximum Subarray",
      "prompt": "Given an integer array ```nums```, find the contiguous subarray (containing at least one number) which has the largest sum and return *its sum*.\n\nA **subarray** is a **contiguous** part of an array.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
              "output": "6",
              "explanation": "[4,-1,2,1] has the largest sum = 6."
          },
          {
              "input": "nums = [1]",
              "output": "1",
              "explanation": null
          },
          {
              "input": "nums = [5,4,-1,7,8]",
              "output": "23",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 10⁵```",
          "```-10⁴ <= nums[i] <= 10⁴```"
      ],
      "tags": [
          "Array",
          "Divide and Conquer",
          "Dynamic Programming"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627965582c3be4f0cac8f421",
      "name": "Maximum Product Subarray",
      "prompt": "Given an integer array ```nums```, find a contiguous non-empty subarray within the array that has the largest product, and return *the product*.\n\nThe test cases are generated so that the answer will fit in a **32-bit** integer.\n\nA **subarray** is a contiguous subsequence of the array.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [2,3,-2,4]",
              "output": "6",
              "explanation": "[2,3] has the largest product 6."
          },
          {
              "input": "nums = [-2,0,-1]",
              "output": "0",
              "explanation": "The result cannot be 2, because [-2,-1] is not a subarray."
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 2 * 10⁴```",
          "```-10 <= nums[i] <= 10```",
          "The product of any prefix or suffix of ```nums``` is **guaranteed** to fit in a **32-bit** integer."
      ],
      "tags": [
          "Array",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62796ace2c3be4f0cac8f424",
      "name": "Find Minimum in Rotated Sorted Array",
      "prompt": "Suppose an array of length ```n``` sorted in ascending order is **rotated** between ```1``` and ```n``` times. For example, the array ```nums = [0,1,2,4,5,6,7]``` might become:\n\n```[4,5,6,7,0,1,2]``` if it was rotated ```4``` times.\n\n```[0,1,2,4,5,6,7]``` if it was rotated ```7``` times.\n\nNotice that **rotating** an array ```[a[0], a[1], a[2], ..., a[n-1]]``` 1 time results in the array ```[a[n-1], a[0], a[1], a[2], ..., a[n-2]]```.\n\nGiven the sorted rotated array ```nums``` of **unique** elements, return *the minimum element of this array*.\n\nYou must write an algorithm that runs in ```O(log n)``` time.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [3,4,5,1,2]",
              "output": "1",
              "explanation": "The original array was [1,2,3,4,5] rotated 3 times."
          },
          {
              "input": "nums = [4,5,6,7,0,1,2]",
              "output": "0",
              "explanation": "The original array was [0,1,2,4,5,6,7] and it was rotated 4 times."
          },
          {
              "input": "nums = [11,13,15,17]",
              "output": "11",
              "explanation": "The original array was [11,13,15,17] and it was rotated 4 times. "
          }
      ],
      "constraints": [
          "```n == nums.length```",
          "```1 <= n <= 5000```",
          "```-5000 <= nums[i] <= 5000```",
          "All the integers of ```nums``` are unique.",
          "```nums``` is sorted and rotated between ```1``` and ```n``` times."
      ],
      "tags": [
          "Array",
          "Binary Search"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62798d5e2c3be4f0cac8f427",
      "name": "Search in Rotated Sorted Array",
      "prompt": "There is an integer array ```nums``` sorted in ascending order (with **distinct** values).\n\nPrior to being passed to your function, ```nums``` is **possibly rotated** at an unknown pivot index ```k (1 <= k < nums.length)``` such that the resulting array is ```[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]``` (**0-indexed**). For example, ```[0,1,2,4,5,6,7]``` might be rotated at pivot index ```3``` and become ```[4,5,6,7,0,1,2]```.\n\nGiven the array ```nums``` **after** the possible rotation and an integer ```target```, return *the index of* ```target``` if it is in ```nums```, or ```-1``` if it is not in ```nums```.\n\nYou must write an algorithm with ```O(log n)``` runtime complexity.",
      "parameters": [
        "nums",
        "target"
      ],
      "examples": [
          {
              "input": "nums = [4,5,6,7,0,1,2], target = 0",
              "output": "4",
              "explanation": null
          },
          {
              "input": "nums = [4,5,6,7,0,1,2], target = 3",
              "output": "-1",
              "explanation": null
          },
          {
              "input": "nums = [1], target = 0",
              "output": "-1",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 5000```",
          "```-10⁴ <= nums[i] <= 10⁴```",
          "All values of ```nums``` are unique.",
          "```nums``` is an ascending array that is possibly rotated.",
          "```-10⁴ <= target <= 10⁴```"
      ],
      "tags": [
          "Array",
          "Binary Search"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62798e5c2c3be4f0cac8f42a",
      "name": "3Sum",
      "prompt": "Given an integer array ```nums```, return all the triplets ```[nums[i], nums[j], nums[k]]``` such that ```i != j```, ```i != k```, and ```j != k```, and ```nums[i] + nums[j] + nums[k] == 0```.\n\nNotice that the solution set must not contain duplicate triplets.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [-1,0,1,2,-1,-4]",
              "output": "[[-1,-1,2],[-1,0,1]]",
              "explanation": null
          },
          {
              "input": "nums = []",
              "output": "[]",
              "explanation": null
          },
          {
              "input": "nums = [0]",
              "output": "[]",
              "explanation": null
          }
      ],
      "constraints": [
          "```0 <= nums.length <= 3000```",
          "```-10⁵ <= nums[i] <= 10⁵```"
      ],
      "tags": [
          "Array",
          "Two Pointers",
          "Sorting"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62798fa02c3be4f0cac8f42d",
      "name": "Container With Most Water",
      "prompt": "You are given an integer array ```height``` of length ```n```. There are ```n``` vertical lines drawn such that the two endpoints of the ```ith``` line are ```(i, 0)``` and ```(i, height[i])```.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the *maximum amount of water a container can store*.",
      "parameters": [
        "height"
      ],
      "examples": [
          {
              "input": "height = [1,8,6,2,5,4,8,3,7]",
              "output": "49",
              "explanation": null
          },
          {
              "input": "height = [1,1]",
              "output": "1",
              "explanation": null
          },
      ],
      "constraints": [
          "```n == height.length```",
          "```2 <= n <= 10⁵```",
          "```0 <= height[i] <= 10⁴```"
      ],
      "tags": [
          "Array",
          "Two Pointers",
          "Greedy"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627990812c3be4f0cac8f430",
      "name": "Sum of Two Integers",
      "prompt": "Given two integers ```a``` and ```b```, return *the sum of the two integers* without using the operators ```+``` and ```-```.",
      "parameters": [
        "a",
        "b"
      ],
      "examples": [
          {
              "input": "a = 1, b = 2",
              "output": "3",
              "explanation": null
          },
          {
              "input": "a = 2, b = 3",
              "output": "5",
              "explanation": null
          }
      ],
      "constraints": [
          "```-1000 <= a, b <= 1000```"
      ],
      "tags": [
          "Math",
          "Bit Manipulation"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627991c12c3be4f0cac8f433",
      "name": "Number of 1 Bits",
      "prompt": "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the **Hamming weight**).",
      "parameters": [
        "n"
      ],
      "examples": [
          {
              "input": "n = 00000000000000000000000000001011",
              "output": "3",
              "explanation": "The input binary string 00000000000000000000000000001011 has a total of three '1' bits."
          },
          {
              "input": "n = 00000000000000000000000010000000",
              "output": "1",
              "explanation": "The input binary string 00000000000000000000000010000000 has a total of one '1' bit."
          },
          {
              "input": "n = 11111111111111111111111111111101",
              "output": "31",
              "explanation": "The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits."
          }
      ],
      "constraints": [
          "The input must be a **binary string** of length ```32```."
      ],
      "tags": [
          "Bit Manipulation"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279939c625a77da1c7c1d3b",
      "name": "Counting Bits",
      "prompt": "Given an integer ```n```, return *an array* ```ans``` of length ```n + 1``` such that for each ```i (0 <= i <= n)```, ```ans[i]``` is the **number** of ```1```'s in the binary representation of ```i```.",
      "parameters": [
        "n"
      ],
      "examples": [
          {
              "input": "n = 2",
              "output": "[0,1,1]",
              "explanation": "0 --> 0, 1 --> 1, 2 --> 10"
          },
          {
              "input": "n = 5",
              "output": "[0,1,1,2,1,2]",
              "explanation": "0 --> 0, 1 --> 1, 2 --> 10, 3 --> 11, 4 --> 100, 5 --> 101"
          }
      ],
      "constraints": [
          "```0 <= n <= 10⁵```"
      ],
      "tags": [
          "Dynamic Programming",
          "Bit Manipulation"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627994e2625a77da1c7c1d3e",
      "name": "Missing Number",
      "prompt": "Given an array ```nums``` containing ```n``` distinct numbers in the range ```[0, n]```, return *the only number in the range that is missing from the array*.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [3,0,1]",
              "output": "2",
              "explanation": "n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums."
          },
          {
              "input": "nums = [0,1]",
              "output": "2",
              "explanation": "n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums."
          },
          {
              "input": "nums = [9,6,4,2,3,5,7,0,1]",
              "output": "8",
              "explanation": "n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums."
          }
      ],
      "constraints": [
          "```n == nums.length```",
          "```1 <= n <= 10⁴```",
          "```0 <= nums[i] <= n```",
          "All the numbers of ```nums``` are **unique**."
      ],
      "tags": [
          "Array",
          "Hash Table",
          "Math",
          "Bit Manipulation",
          "Sorting"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627995e3625a77da1c7c1d41",
      "name": "Reverse Bits",
      "prompt": "Reverse bits of a given 32 bits unsigned integer.",
      "parameters": [
        "n"
      ],
      "examples": [
          {
              "input": "n = 00000010100101000001111010011100",
              "output": "964176192 (00111001011110000010100101000000)",
              "explanation": "The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000."
          },
          {
              "input": "n = 11111111111111111111111111111101",
              "output": "3221225471 (10111111111111111111111111111111)",
              "explanation": "The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111."
          }
      ],
      "constraints": [
          "The input must be a **binary string** of length ```32```."
      ],
      "tags": [
          "Divide and Conquer",
          "Bit Manipulation"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627997da4fb20f5819b928c3",
      "name": "Climbing Stairs",
      "prompt": "You are climbing a staircase. It takes ```n``` steps to reach the top.\n\nEach time you can either climb ```1``` or ```2``` steps. In how many distinct ways can you climb to the top?",
      "parameters": [
        "n"
      ],
      "examples": [
          {
              "input": "n = 2",
              "output": "2",
              "explanation": "There are two ways to climb to the top.\n\n1. 1 step + 1 step.\n\n2. 2 steps."
          },
          {
              "input": "n = 3",
              "output": "3",
              "explanation": "There are three ways to climb to the top.\n\n1. 1 step + 1 step + 1 step.\n\n2. 1 step + 2 steps\n\n3. 2 steps + 1 step."
          }
      ],
      "constraints": [
          "```1 <= n <= 45```"
      ],
      "tags": [
          "Math",
          "Dynamic Programming",
          "Memoization"
      ],
      "difficulty": "easy",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279991c4fb20f5819b928c6",
      "name": "Coin Change",
      "prompt": "You are given an integer array ```coins``` representing coins of different denominations and an integer ```amount``` representing a total amount of money.\n\nReturn *the fewest number of coins that you need to make up that amount*. If that amount of money cannot be made up by any combination of the coins, return ```-1```.\n\nYou may assume that you have an infinite number of each kind of coin.",
      "parameters": [
        "coins",
        "amount"
      ],
      "examples": [
          {
              "input": "coins = [1,2,5], amount = 11",
              "output": "3",
              "explanation": "11 = 5 + 5 + 1"
          },
          {
              "input": "coins = [2], amount = 3",
              "output": "-1",
              "explanation": null
          },
          {
              "input": "coins = [1], amount = 0",
              "output": "0",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= coins.length <= 12```",
          "```1 <= coins[i] <= 2³¹ - 1```",
          "```0 <= amount <= 10⁴```"
      ],
      "tags": [
          "Array",
          "Dynamic Programming",
          "Breadth-First Search"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "62799ff19f88fa35a393e784",
      "name": "Longest Increasing Subsequence",
      "prompt": "Given an integer array ```nums```, return the length of the longest strictly increasing subsequence.\n\nA **subsequence** is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, ```[3,6,2,7]``` is a *subsequence* of the array ```[0,3,1,6,2,2,7]```.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [10,9,2,5,3,7,101,18]",
              "output": "4",
              "explanation": "The longest increasing subsequence is [2,3,7,101], therefore the length is 4."
          },
          {
              "input": "nums = [0,1,0,3,2,3]",
              "output": "4",
              "explanation": null
          },
          {
              "input": "nums = [7,7,7,7,7,7,7]",
              "output": "1",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 2500```",
          "```-10⁴ <= nums[i] <= 10⁴```"
      ],
      "tags": [
          "Array",
          "Binary Search",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279a3123840f38948a49b1c",
      "name": "Longest Common Subsequence",
      "prompt": "Given two strings ```text1``` and ```text2```, return the length of their longest **common subsequence**. If there is no **common subsequence**, return ```0```.\n\nA **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.\n\nFor example, ```ace``` is a subsequence of ```abcde```.\n\nA **common subsequence** of two strings is a subsequence that is common to both strings.",
      "parameters": [
        "text1",
        "text2"
      ],
      "examples": [
          {
              "input": "text1 = 'abcde', text2 = 'ace'",
              "output": "3",
              "explanation": "The longest common subsequence is 'ace' and its length is 3."
          },
          {
              "input": "text1 = 'abc', text2 = 'abc'",
              "output": "3",
              "explanation": "The longest common subsequence is 'abc' and its length is 3."
          },
          {
              "input": "text1 = 'abc', text2 = 'def'",
              "output": "0",
              "explanation": "There is no such common subsequence, so the result is 0."
          }
      ],
      "constraints": [
          "```1 <= text1.length, text2.length <= 1000```",
          "```text1``` and ```text2``` consist of only lowercase English characters."
      ],
      "tags": [
          "String",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279a4df3840f38948a49b1f",
      "name": "Word Break",
      "prompt": "Given a string ```s``` and a dictionary of strings ```wordDict```, return ```true``` if ```s``` can be segmented into a space-separated sequence of one or more dictionary words.\n\nNote that the same word in the dictionary may be reused multiple times in the segmentation.",
      "parameters": [
        "s",
        "wordDict"
      ],
      "examples": [
          {
              "input": "s = 'leetcode', wordDict = ['leet','code']",
              "output": "true",
              "explanation": "Return true because 'leetcode' can be segmented as 'leet code'."
          },
          {
              "input": "s = 'applepenapple', wordDict = ['apple','pen']",
              "output": "true",
              "explanation": "Return true because 'applepenapple' can be segmented as 'apple pen apple'. Note that you are allowed to reuse a dictionary word."
          },
          {
              "input": "s = 'catsandog', wordDict = ['cats','dog','sand','and','cat']",
              "output": "false",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= s.length <= 300```",
          "```1 <= wordDict.length <= 1000```",
          "```1 <= wordDict[i].length <= 20```",
          "```s``` and ```wordDict[i]``` consist of only lowercase English letters.",
          "All the strings of ```wordDict``` are **unique**."
      ],
      "tags": [
          "String",
          "Hash Table",
          "Dynamic Programming",
          "Trie",
          "Memoization"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279a963c18f068f9abce80b",
      "name": "Combination Sum",
      "prompt": "Given an array of **distinct** integers ```nums``` and a target integer ```target```, return *the number of possible combinations* that add up to ```target```.\n\nThe test cases are generated so that the answer can fit in a **32-bit** integer.",
      "parameters": [
        "nums",
        "target"
      ],
      "examples": [
          {
              "input": "nums = [1,2,3], target = 4",
              "output": "7",
              "explanation": null
          },
          {
              "input": "nums = [9], target = 3",
              "output": "0",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 200```",
          "```1 <= nums[i] <= 1000```",
          "All the elements of ```nums``` are **unique**.",
          "```1 <= target <= 1000```"
      ],
      "tags": [
          "Array",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279aa80c18f068f9abce80e",
      "name": "House Robber",
      "prompt": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.\n\nGiven an integer array ```nums``` representing the amount of money of each house, return *the maximum amount of money you can rob tonight* **without alerting the police**.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [1,2,3,1]",
              "output": "4",
              "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4."
          },
          {
              "input": "nums = [2,7,9,3,1]",
              "output": "12",
              "explanation": "Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1). Total amount you can rob = 2 + 9 + 1 = 12."
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 100```",
          "```0 <= nums[i] <= 400```"
      ],
      "tags": [
          "Array",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279ac1bc18f068f9abce811",
      "name": "House Robber II",
      "prompt": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle**. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and **it will automatically contact the police if two adjacent houses were broken into on the same night**.\n\nGiven an integer array ```nums``` representing the amount of money of each house, return *the maximum amount of money you can rob tonight* **without alerting the police**.",
      "parameters": [
        "nums"
      ],
      "examples": [
          {
              "input": "nums = [2,3,2]",
              "output": "3",
              "explanation": "You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses."
          },
          {
              "input": "nums = [1,2,3,1]",
              "output": "4",
              "explanation": "Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4."
          },
          {
              "input": "nums = [1,2,3]",
              "output": "3",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= nums.length <= 100```",
          "```0 <= nums[i] <= 1000```"
      ],
      "tags": [
          "Array",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "6279af02c18f068f9abce814",
      "name": "Decode Ways",
      "prompt": "A message containing letters from ```A-Z``` can be **encoded** into numbers using the following mapping:\n\n```'A' -> '1'```\n\n```'B' -> '2'```\n\n```...```\n\n```'Z' -> '26'```\n\nTo **decode** an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, ```11106``` can be mapped into:\n\n```'AAJF'``` with the grouping ```(1 1 10 6)```\n\n```'KJF'``` with the grouping ```(11 10 6)```\n\nNote that the grouping ```(1 11 06)``` is invalid because ```'06'``` cannot be mapped into ```'F'``` since ```'6'``` is different from ```'06'```.\n\nGiven a string ```s``` containing only digits, return the **number** of ways to **decode** it.\n\nThe test cases are generated so that the answer fits in a **32-bit** integer.",
      "parameters": [
        "s"
      ],
      "examples": [
          {
              "input": "s = '12'",
              "output": "2",
              "explanation": "'12' could be decoded as 'AB' (1 2) or 'L' (12)."
          },
          {
              "input": "s = '226'",
              "output": "3",
              "explanation": "'226' could be decoded as 'BZ' (2 26), 'VF' (22 6), or 'BBF' (2 2 6)."
          },
          {
              "input": "s = '06'",
              "output": "0",
              "explanation": "'06' cannot be mapped to 'F' because of the leading zero ('6' is different from '06')."
          }
      ],
      "constraints": [
          "```1 <= s.length <= 100```",
          "```s``` contains only digits and may contain leading zero(s)."
      ],
      "tags": [
          "String",
          "Dynamic Programming"
      ],
      "difficulty": "medium",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-09",
      "author": "leetcode"
  },
  {
      "_id": "627bf0b14a648ab5ca2019f6",
      "name": "Median of Two Sorted Arrays",
      "prompt": "Given two sorted arrays ```nums1``` and ```nums2``` of size ```m``` and ```n``` respectively, return **the median** of the two sorted arrays.\n\nThe overall run time complexity should be ```O(log (m+n))```.",
      "parameters": [
        "nums1",
        "nums2"
      ],
      "examples": [
          {
              "input": "nums1 = [1,3], nums2 = [2]",
              "output": "2.00000",
              "explanation": "merged array = [1,2,3] and median is 2."
          },
          {
              "input": "nums1 = [1,2], nums2 = [3,4]",
              "output": "2.50000",
              "explanation": "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
          }
      ],
      "constraints": [
          "```nums1.length == m```",
          "```nums2.length == n```",
          "```0 <= m <= 1000```",
          "```0 <= n <= 1000```",
          "```1 <= m + n <= 2000```",
          "```-10⁶ <= nums1[i], nums2[i] <= 10⁶```"
      ],
      "tags": [
          "Array",
          "Binary Search",
          "Divide and Conquer"
      ],
      "difficulty": "hard",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-11",
      "author": "leetcode"
  },
  {
      "_id": "627bf22a4a648ab5ca2019f9",
      "name": "Distinct Echo Substrings",
      "prompt": "Return the number of **distinct** non-empty substrings of ```text``` that can be written as the concatenation of some string with itself (i.e. it can be written as ```a + a``` where ```a``` is some string).",
      "parameters": [
        "text"
      ],
      "examples": [
          {
              "input": "text = 'abcabcabc'",
              "output": "3",
              "explanation": "The 3 substrings are 'abcabc', 'bcabca' and 'cabcab'."
          },
          {
              "input": "text = 'leetcodeleetcode'",
              "output": "2",
              "explanation": "The 2 substrings are 'ee' and 'leetcodeleetcode'."
          }
      ],
      "constraints": [
          "```1 <= text.length <= 2000```",
          "```text``` has only lowercase English letters."
      ],
      "tags": [
          "String",
          "Dynamic Programming",
          "Trie",
          "Sliding Window",
          "Rolling Hash",
          "Hash Function"
      ],
      "difficulty": "hard",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-11",
      "author": "leetcode"
  },
  {
      "_id": "627bf4504a648ab5ca2019fc",
      "name": "Number of Ways to Wear Different Hats to Each Other",
      "prompt": "There are ```n``` people and ```40``` types of hats labeled from ```1``` to ```40```.\n\nGiven a 2D integer array ```hats```, where ```hats[i]``` is a list of all hats preferred by the ```ith``` person.\n\nReturn the number of ways that the ```n``` people wear different hats to each other.\n\nSince the answer may be too large, return it modulo ```10⁹ + 7```.",
      "parameters": [
        "hats"
      ],
      "examples": [
          {
              "input": "hats = [[3,4],[4,5],[5]]",
              "output": "1",
              "explanation": "There is only one way to choose hats given the conditions. First person choose hat 3, Second person choose hat 4 and last one hat 5."
          },
          {
              "input": "hats = [[3,5,1],[3,5]]",
              "output": "4",
              "explanation": "There are 4 ways to choose hats: (3,5), (5,3), (1,3) and (1,5)"
          },
          {
              "input": "hats = [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]]",
              "output": "24",
              "explanation": "Each person can choose hats labeled from 1 to 4. Number of Permutations of (1,2,3,4) = 24."
          }
      ],
      "constraints": [
          "```n == hats.length```",
          "```1 <= n <= 10```",
          "```1 <= hats[i].length <= 40```",
          "```1 <= hats[i][j] <= 40```",
          "```hats[i]``` contains a list of **unique** integers."
      ],
      "tags": [
          "Array",
          "Dynamic Programming",
          "Bit Manipulation",
          "Bitmask"
      ],
      "difficulty": "hard",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-11",
      "author": "leetcode"
  },
  {
      "_id": "627c0163a7dc65bdf102ee54",
      "name": "Find the Shortest Superstring",
      "prompt": "Given an array of strings ```words```, return *the smallest string* that contains each string in ```words``` as a substring. If there are multiple valid strings of the smallest length, return **any of them**.\n\nYou may assume that no string in ```words``` is a substring of another string in ```words```.",
      "parameters": [
        "words"
      ],
      "examples": [
          {
              "input": "words = ['alex','loves','codybot']",
              "output": "'alexlovescodybot'",
              "explanation": "All permutations of 'alex','loves','codybot' would also be accepted."
          },
          {
              "input": "words = ['catg','ctaagt','gcta','ttca','atgcatc']",
              "output": "'gctaagttcatgcatc'",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= words.length <= 12```",
          "```1 <= words[i].length <= 20```",
          "```words[i]``` consists of lowercase English letters.",
          "All the strings of ```words``` are **unique**."
      ],
      "tags": [
          "Array",
          "String",
          "Dynamic Programming",
          "Bit Manipulation",
          "Bitmask"
      ],
      "difficulty": "hard",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-11",
      "author": "leetcode"
  },
  {
      "_id": "627c036ca7dc65bdf102ee58",
      "name": "K-Similar Strings",
      "prompt": "Strings ```s1``` and ```s2``` are ```k```-**similar** (for some non-negative integer ```k```) if we can swap the positions of two letters in ```s1``` exactly ```k``` times so that the resulting string equals ```s2```.\n\nGiven two anagrams ```s1``` and ```s2```, return the smallest ```k``` for which ```s1``` and ```s2``` are ```k```-**similar**.",
      "parameters": [
        "s1",
        "s2"
      ],
      "examples": [
          {
              "input": "s1 = 'ab', s2 = 'ba'",
              "output": "1",
              "explanation": null
          },
          {
              "input": "s1 = 'abc', s2 = 'bca'",
              "output": "2",
              "explanation": null
          }
      ],
      "constraints": [
          "```1 <= s1.length <= 20```",
          "```s2.length == s1.length```",
          "```s1``` and ```s2``` contain only lowercase letters from the set ```{'a', 'b', 'c', 'd', 'e', 'f'}```.",
          "```s2``` is an anagram of ```s1```."
      ],
      "tags": [
          "String",
          "Breadth-First Search"
      ],
      "difficulty": "hard",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-11",
      "author": "leetcode"
  },
  {
      "_id": "627c04bfa7dc65bdf102ee5b",
      "name": "Merge k Sorted Lists",
      "prompt": "You are given an array of ```k``` linked-lists ```lists```, each linked-list is sorted in ascending order.\n\n*Merge all the linked-lists into one sorted linked-list and return it*.",
      "parameters": [
        "lists"
      ],
      "examples": [
          {
              "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
              "output": "[1,1,2,3,4,4,5,6]",
              "explanation": null
          },
          {
              "input": "lists = []",
              "output": "[]",
              "explanation": null
          },
          {
              "input": "lists = [[]]",
              "output": "[]",
              "explanation": null
          }
      ],
      "constraints": [
          "```k == lists.length```",
          "```0 <= k <= 10⁴```",
          "```0 <= lists[i].length <= 500```",
          "```-10⁴ <= lists[i][j] <= 10⁴```",
          "```lists[i]``` is sorted in **ascending order**.",
          "The sum of ```lists[i].length``` will not exceed ```10⁴```."
      ],
      "tags": [
          "Linked List",
          "Divide and Conquer",
          "Heap (Priority Queue)",
          "Merge Sort"
      ],
      "difficulty": "hard",
      "rating": 0,
      "numRatings": 0,
      "timestamp": "2022-05-11",
      "author": "leetcode"
  }
]