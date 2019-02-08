// Object Destructuring
//
//const person = {
  //name: 'Jorge',
  //age: 33,
  //location: {
    //city: 'La Ceiba',
    //temp: 25,
  //},
//};

//const { name: firstName = 'Desconocido', age } = person;

//console.log(`${firstName} is ${age}`);

//const { city, temp: temperature } = person.location;

//if (city && temperature) {
  //console.log(`It's ${temperature} in ${city}.`);
////}

//const book = {
  //title: 'El Coronel no tiene quien le escriba',
  //author: 'Gabriel García Márquez',
  //publisher: {
    //name: 'penguin',
  //}
//};

//const { name: publisherName = 'Self-Published' } = book.publisher;

//console.log(publisherName);

// Array Destructuring
const address = ['Sitramacsa', 'La Ceiba', 'Atlantida',];
const [colonia, city, , zip = 1111] = address;

console.log(`Your are in ${city} ${zip}`);

const item = ['café', 3, 4, 6];
const [cafe, , mediano] = item;

console.log(`Un ${cafe} mediano cuesta ${mediano}`);
