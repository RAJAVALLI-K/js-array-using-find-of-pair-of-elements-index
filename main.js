// 2.Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

let numbers = [10, 20, 10, 40, 50, 60, 70], target = 50;
function twoSum(numbers, target) {
    let arrays = [];
    let arrayIndex = [];

    for (let i = 0; i < numbers.length; i++) {
        if (arrays[numbers[i]] != null) {
            let index = arrays[numbers[i]];
            arrayIndex[0] = index;
            arrayIndex[1] = i;
        }
        else {
            arrays[target - numbers[i]] = i;
        }
    }
    return arrayIndex;
}
console.log(twoSum(numbers, target));