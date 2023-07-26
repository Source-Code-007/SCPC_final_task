// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const strReverseFunc = (str) => {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }
    return reverseStr;
}
console.log(strReverseFunc('hello Bangladesh, welcome!'));



// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const sumOfPositiveNum = (arr) => {
    let sum = 0
    arr.forEach(elem => {
        if (elem >= 0) {
            sum += elem
        }
    });
    return sum
}
console.log(sumOfPositiveNum([1,2,3,4,-5,-6,-6,5]));


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
const findMostFrequentElement = (arr) => {
    const freq = {}
    for (elem of arr) {
        freq[elem] = (freq[elem] || 0) + 1
    }
    const mostFreqValue = Math.max(...Object.values(freq))
    const mostFreqElem = Object.keys(freq).find(elem => freq[elem] === mostFreqValue)
    return mostFreqElem
}
console.log(findMostFrequentElement([1,2,3,3,3,3,4,5,5,5,5,5]));


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const findTwoNumbersWithSum = (arr, num) => {
    const finalTwoNumArr = []
    arr.forEach((elem, ind) => {
        if ((arr[ind] + (arr[ind + 1])) === num && finalTwoNumArr.length < 1) {
            finalTwoNumArr.push(ind)
            finalTwoNumArr.push(ind + 1)
        }
    })
    return finalTwoNumArr
}
console.log(findTwoNumbersWithSum([1,2,3,22,3,3,5, 6], 25));


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculateFunc = (num1, num2, operator) => {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        if (num2 === 0) {
            return "Error: Can't divide by zero";
        }
        return num1 / num2
    } else {
        return 'Error: Invalid operator';
    }
}
console.log(calculateFunc(5,5,'+'));


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generateRandomPassword = (length) => {
    const allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}|:;"<>,.?/~';
    let password = '';

    if (length < 6) {
        return 'Error: Password must be at least 6 characters long!';
    }

    while (
        !/[A-Z]/.test(password) ||
        !/[a-z]/.test(password) ||
        !/\d/.test(password) ||
        !/[!@#$%^&*()_\-+=\[\]{}|:;"<>,.?/~]/.test(password) ||
        password.length < length) {
        password = ''
        for (let i = 0; i < length; i++) {
            const randomInd = Math.floor(Math.random() * allCharacters.length)
            password += allCharacters[randomInd]
        }

    }
    return password
}
console.log(generateRandomPassword(6));


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToIntegerFunc = (str) => {
    const romanNumerals = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let result = 0
    for (let i = 0; i < str.length; i++) {
        const currVal = romanNumerals[str[i]]
        const nextVal = romanNumerals[str[i + 1]]

        if(nextVal > currVal){
            result+= nextVal - currVal
            i++
        }else{
            result+=currVal
        }
    }
    return result
}
console.log(romanToIntegerFunc('IV'));


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const secondSmallestNum = (arr)=>{
    return arr.sort((a,b)=>  a-b)[1]
}
console.log(secondSmallestNum([11,55,22,3,4,5,54,66666]));