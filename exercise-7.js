function hapusSimbol(str) {
    var temp = ''
    var simbol = 'abcdefghijklmnopqrstuvwxyz1234567890'
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < simbol.length; j++) {
            if (str[i] == simbol[j]){
                temp += str[i]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100