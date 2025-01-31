function stringRev(str) {
    return str.split("").reverse().join("");
}

function digitRev(num) {
    str = num.toString();
    return num + Number(stringRev(str))
}

function isPalindrome(num) {
        
}

console.log(digitRev(19))
