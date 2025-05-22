// Soal nomer 1
// 1. Sebuah bola dengan massa 3 kg bergerak dengan kecepatan 6 m/s. Berapakah energi kinetik bola tersebut?
const m = 3;
const v = 6;

const Ek = 0.5 * m * v * v;

console.log(`Energi kinetik bola adalah ${Ek} Joule.`);

// Soal nomer 2
// 2. Sebuah bola bermassa 0,2 kg bergerak melingkar dengan kecepatan 4 m/s di sepanjang lintasan berjari-jari 0,5 meter. Berapakah gaya sentripetal yang dialami oleh bola tersebut?
// let m = 0.2;
// let v = 4;
// let r = 0.5;

// const F8 = (m * v ** 2) / r;
// console.log(F8);

// Soal Nomor 3
// 3. Sebuah benda dengan massa 10 kg jatuh bebas dari ketinggian 15 meter. Berapa energi potensial gravitasi benda tersebut pada ketinggian 15 meter sebelum jatuh?
// let m = 10;
// let h = 15;
// let g = 9.8;

// const Ep = m * g * h;
// console.log(Ep);

// Soal Nomor 4
// 4. Sebuah kotak dengan massa 8 kg ditarik dengan gaya konstan sebesar 20 N sepanjang 5 meter. Berapa besar usaha yang dilakukan pada kotak tersebut?
// let F = 20;
// let s = 5;

// const W = F * s;
// console.log(W);

// Soal Nomor 5
// 5. Buatlah sebuah program dalam bahasa JavaScript yang mencetak segitiga bintang (*) ke konsol. Program harus membuat variable untuk memasukkan jumlah baris segitiga, kemudian mencetak segitiga sesuai dengan jumlah baris tersebut.
const jumlahBaris = 5;

console.log("Output:");
for (let i = 1; i <= jumlahBaris; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "* ";
  }
  console.log(baris);
}