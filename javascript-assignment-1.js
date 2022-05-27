
// ******************************************************
// Question-1: increase each value 10% in fiyatlar
// NOT: use FOREACH
// ******************************************************


// let fiyatlar = [100, 250, 50, 89];

// let newFiyat = "";
// fiyatlar.forEach(deneme);

// function deneme(value) {
//     newFiyat = value * 1.1
//     console.log(Math.round(newFiyat));
// }




// ******************************************************
//  Question-2: get each value higher than 90 in fiyatlar array..
// ******************************************************


// let fiyatlar = [100, 250, 50, 89];

// let buyuk18fiyatlar =fiyatlar.filter(deneme);

// function deneme(value) {
//     return  value > 90

// }
// console.log(buyuk18fiyatlar);




// ******************************************************
//  Question-3: increase the values in fiyatlar array 
// in the rate of 10% and clg
// ******************************************************


// let fiyatlar = [100, 250, 50, 89];

// let buyuk18fiyatlar = fiyatlar.filter(deneme);

// function deneme(value) {
//     return  value < 110

// }

// console.log(buyuk18fiyatlar);

// let sonfiyat = "";
// buyuk18fiyatlar.forEach(deneme2)

// function deneme2(value2){
//     sonfiyat = value2*1.1
//    console.log(Math.round(sonfiyat));
// }




//********************************************************
// Question-4: increase the values in the rate of 50% 
// if lower than 4000. And, store them in a new Array.   
// ******************************************************

// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let kucuk4000 = maaslar.filter(deneme);

// function deneme(value) {
//     return  value < 4000

// }

// let sonmaas = kucuk4000.map(deneme2)

// function deneme2(value2){
//     return value2*1.5

// }
//  console.log(sonmaas);




//********************************************************
// Question-5: increase the values in the rate of %25 if 
// higher than 4000 then clg
// ******************************************************


// const maaslar = [3000, 5000, 4000, 6000, 6500];
// let buyuk4000 = maaslar.filter(deneme);

// function deneme(value) {
//     return  value >= 4000

// }

// let sonmaas = buyuk4000.map(deneme2)

// function deneme2(value2){
//     return value2*1.25

// }
//  console.log(sonmaas);




//********************************************************
// Question-6:  calculate total values in the array by using 
// forEach method
// ******************************************************


// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let toplammaaslar = 0
// maaslar.forEach(deneme);

// function deneme(value) {
//     toplammaaslar += value

// }
// console.log(toplammaaslar);




//********************************************************
// Question-7:  calculate total values in the array by using 
// reduce method
// ******************************************************


// const maaslar = [3000, 5000, 4000, 6000, 6500];

// let toplammaaslar = maaslar.reduce(deneme);

// function deneme(toplam, value) {
//     return toplam + value

// }
// console.log(toplammaaslar);
