function stringRev(str) {
    return str.split("").reverse().join("");
}

function digitRev(num) {
    return Number(stringRev(num.toString()));
}

function addDigitRev(num) {
    return num+BigInt(digitRev(num));
}

function isPalindrome(num) {
    return num==digitRev(num);
}

function palindromeQuest(seed=Math.floor(Math.random()*10),it=1000,counter=0) {
    if (it>0 && !isPalindrome(seed)) {
        console.log(seed);
        counter+=1
        palindromeQuest(addDigitRev(seed),it-1,counter);
    } else {
        console.log(seed)
        console.log(`It took ${counter} steps to reach a palindrome! ${seed} is not a Lychrel Number!`)
    }
}

palindromeQuest(BigInt(197),100)
