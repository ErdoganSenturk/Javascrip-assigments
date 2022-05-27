
//***************************************************
//* Qestion-1: what are the names of people < age 33
//***************************************************


const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },

  {
    name: "Ruzgar",
    surname: "Kuzey",
    job: "tester",
    age: 24,
  },
];

const kucukler = kisiler
  .filter((yas) => yas.age < 33)
  .forEach((ad) => console.log(ad.name));



//***************************************************
//* Qestion-2: store the names of people < age 33
//***************************************************


// const kucukName = kisiler.filter((yas) => yas.age < 33).map((nm) => nm.name);
// console.log(kucukName);




//***************************************************
//* Qestion-3: store in a new object the ages and the
//  names of people whose job is developer 
//***************************************************


// const isYas = kisiler
//   .filter((meslek) => meslek.job == "developer")
//   .map((is) => ({
//     name: is.name,
//     age: is.age,
//   }));
// console.log(isYas);





//***************************************************
//* Qestion-4: if the salary of people is lower than average, 
// increase their salarya 20% and store a n array new salary. 
//***************************************************


// const maaslar = [3000, 5000, 4000, 6000, 6500];
// const yeniMaas = maaslar
//   .filter((ort) => ort < maaslar.reduce((a, b) => a + b, 0) / maaslar.length)
//   .map((zam) => zam * 1.2);

// console.log(yeniMaas);