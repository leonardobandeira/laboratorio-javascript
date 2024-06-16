function isPalindrome() {
    const word = document.getElementById('wordInput').value;

    const splitWord = word.split("");

    const reverseWord = splitWord.reverse().join("");

    let result = 'The word is NOT a palindrome!'

    if (word === reverseWord) {
        result = 'The word is a palindrome!'
    }

    const showResult = document.querySelector('#resultContainer');
    showResult.textContent = result
}