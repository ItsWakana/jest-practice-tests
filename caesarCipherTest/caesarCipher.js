const caesarCipher = (string, repeat) => {

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