function palindrome(message) {
    // wirte your code here
    let is_palin = 0;
    for (var i = 0; i < message.length / 2; i++) {
        is_palin += (message[i] !== message[message.length - 1 - i]);
    }
    console.log(is_palin == 0)
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true