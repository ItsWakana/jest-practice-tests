const caesarCipher = (string, repeat) => {
    //first create an alphabet variable, theen loop over this alphabet variable to create an object we can use later on when looping over the string to reference the value against the object and check if the value exists in the object. This way we won't need to loop over the entire alphabet each time.

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';
    let alphaObj = {}

    for (let i=0; i<alphabet.length; i++) {
        alphaObj[alphabet[i]] = i;
    }

    for (let i=0; i<string.length; i++) {
        let isAlpha = false;
        if (string[i] in alphaObj) {
            isAlpha = true;

            let newLetterPos = alphaObj[string[i]];

            for (let c=0; c<repeat; c++) {
                newLetterPos++;
                if (newLetterPos > alphabet.length - 1) {
                    newLetterPos = 0;
                }

            }
            newString += alphabet[newLetterPos];
        }

        if (!isAlpha) {
            newString += string[i];
        }
    }

    return newString
}

module.exports = caesarCipher;