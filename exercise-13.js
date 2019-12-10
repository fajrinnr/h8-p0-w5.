function sorting(arrNumber) {
    var sorted = arrNumber.sort()
    return sorted
    // do {
    //     swap = false
    //     for (let i = 0; i < arrNumber.length; i++) {
    //         if (arrNumber[i] > arrNumber[i + 1]) {
    //             angka = arrNumber[i]
    //             arrNumber[i] = arrNumber[i + 1]
    //             arrNumber[i + 1] = angka
    //             swap = true
    //         }
    //     }
    // } while (swap)
    // return arrNumber
}


function getTotal(arrNumber) {
    let highNumber = arrNumber[arrNumber.length - 1];
    let counter = 0;

    if (arrNumber.length <= 0) {
        return '';
    }

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === highNumber) {
            counter++;
        }
    }

    return 'angka paling besar adalah ' + highNumber + ' dan jumlah kemunculan sebanyak ' + counter + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    console.log(listSort)
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
  //''