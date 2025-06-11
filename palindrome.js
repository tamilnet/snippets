// function isPalindrome(x) {

//     // Convert the number to a string
//     const str = x.toString();

//   console.log(str);
//     // Reverse the string
//     const reversedStr = str.split('').reverse().join('');

//     // Check if the original string is equal to the reversed string
//     if (str === reversedStr) {
//         console.log("The number is a palindrome.");
//     } else {
//         console.log("The number is not a palindrome.");
//     }

// }

// isPalindrome(1214);



// Function to check if a number is a palindrome without converting to string

function isPalindrome(x) {
  console.log("Checking if the number is a palindrome...");
    // Handle negative numbers and numbers ending with 0 (except 0 itself)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;
    console.log("Original number: ", original);
    // Reverse the number
    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    console.log("Reversed number: ", reversed);
    // Check if the original number is equal to the reversed number
    if (original === reversed) {
        console.log("The number is a palindrome.");
        return true;
    } else {
        console.log("The number is not a palindrome.");
        return false;
    }
}

isPalindrome(12321); // Output: false