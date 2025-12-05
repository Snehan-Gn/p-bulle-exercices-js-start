// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let string1 = array1.join("")
  let string2 = array2.join("")

  let sum = Number(string1) + Number(string2)

  return sum
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let stringValue = String(value)

  return stringValue == stringValue.split("").reverse().join("")
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!Boolean(input)){
    return 'Required field'
  }
  else if (!Boolean(Number(input))){
    return 'Must be a number besides 0'
  }
  else{
    return ''
  }
}
