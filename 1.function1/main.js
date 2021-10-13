function reverseString(message) {
    // wirte your code here
    var new_message = '';
    for (var i = message.length - 1; i >= 0; i--) {
        new_message += message[i];
    }
    console.log(new_message);
}
reverseString('hello'); // should return 'olleh'