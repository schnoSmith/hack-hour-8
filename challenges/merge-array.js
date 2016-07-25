/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
<<<<<<< HEAD
    let result = [];

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1[0] !== undefined && (arr2[0] === undefined || arr1[0] < arr2[0])) {
            result.push(arr1[0]);
            arr1.splice(0, 1);
        } else {
            result.push(arr2[0]);
            arr2.splice(0, 1);
        }
    }

    return result;
=======

>>>>>>> 905cb61e08b2cba496ed1dc1208588f9d4b16d96
}

module.exports = mergeArrays;