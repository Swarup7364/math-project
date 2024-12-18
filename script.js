function encrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        // Encrypt only alphabetic characters
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode(((char - 65 + key) % 26) + 65); // Uppercase letters
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 + key) % 26) + 97); // Lowercase letters
        } else {
            result += text[i]; // Non-alphabetic characters remain unchanged
        }
    }
    return result;
}

function decrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        // Decrypt only alphabetic characters
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode(((char - 65 - key + 26) % 26) + 65); // Uppercase letters
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 - key + 26) % 26) + 97); // Lowercase letters
        } else {
            result += text[i]; // Non-alphabetic characters remain unchanged
        }
    }
    return result;
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value);
    
    // Validate the key input
    if (isNaN(key) || key < 1 || key > 25) {
        alert("Please enter a valid key (1-25).");
        return; // Exit the function if the key is invalid
    }

    const encryptedText = encrypt(inputText, key);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').value;
    const key = parseInt(document.getElementById('key').value);
    
    // Validate the key input
    if (isNaN(key) || key < 1 || key > 25) {
        alert("Please enter a valid key (1-25).");
        return; // Exit the function if the key is invalid
    }

    const decryptedText = decrypt(outputText, key);
    document.getElementById('outputText').value = decryptedText;
});