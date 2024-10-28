// Select the result element
const result = document.querySelector("#result");

// Add an event listener to the check-btn
const checkBtn = document.querySelector("#check-btn");
checkBtn.addEventListener("click", checkValue);

// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Function to check the input value and display the result
function checkValue() {
    const textInput = document.querySelector("#text-input");
    if (textInput.value === "") {
        alert("Please input a value."); // Updated alert message
    } else {
        if (isPalindrome(textInput.value)) {
            result.textContent = `${textInput.value} is a palindrome.`;
        } else {
            result.textContent = `${textInput.value} is not a palindrome.`;
        }
    }
}

