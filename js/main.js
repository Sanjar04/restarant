"use strict";

let chegirma = 15;
let Kattachegirma = 20;
let minSum = +prompt("summani kiriting");
let maxSum = 300;

if (minSum < 50) {
    console.log('chegirma yo`q eg bo`lish uchun 50$ dan ko`piroq narsa oling');
} else if (maxSum > minSum && minSum < maxSum) {
    console.log(`sizga ${chegirma}% chegirma mavjud bizning restarantlarimizdan foydalanganingiz uchun tashakkur`);
}
if (minSum > 300) {
    console.log(`Siz ${Kattachegirma}% chegirmaga ega bo'ldingiz restarantimizdan foydalanganingiz uchun raxmat`);
}