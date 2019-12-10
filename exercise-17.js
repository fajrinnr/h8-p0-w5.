function kaliTerusRekursif(angka) {
    var angkaStr = angka.toString()
    var hasil = 1
    for (let i = 0; i < angkaStr.length; i++) {
        hasil *= Number(angkaStr[i])
    }
    if (hasil < 10){
        return hasil
    } else {
        return kaliTerusRekursif(hasil)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6