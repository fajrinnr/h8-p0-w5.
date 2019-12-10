function changeVocals(str) {
    let temp = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a': temp += 'b';
                break;
            case 'i': temp += 'j';
                break;
            case 'u': temp += 'v';
                break;
            case 'e': temp += 'f';
                break;
            case 'o': temp += 'p';
                break;
            case 'A': temp += 'B';
                break;
            case 'I': temp += 'J';
                break;
            case 'U': temp += 'V';
                break;
            case 'E': temp += 'F';
                break;
            case 'O': temp += 'P';
                break;
            default: temp += str[i];
                break;
        }
    }
    return temp;
}

function reverseWord(str) {
    let temp = ''
    for (let i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}

function setLowerUpperCase(str) {
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            temp += str[i].toUpperCase()
        } else if (str[i] == str[i].toUpperCase()) {
            temp += str[i].toLowerCase()
        }
    }
    return temp
}

function removeSpaces(str) {
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i]
        }
    }
    return temp
}

function passwordGenerator(name) {
    var cg = changeVocals(name)
    var rw = reverseWord(cg)
    var sluc = setLowerUpperCase(rw)
    var rs = removeSpaces(sluc)
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        return rs
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'