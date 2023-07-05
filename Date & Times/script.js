
let d;

// Get today's date and time
d = new Date(); //objedir. Şu anı verir.

// Set to a string
d = d.toString();

// Get a specific date
// Important: the month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 0, 10, 12, 30, 0);

// Pass in a string bu sekılde yazınca ay 1den baslıyor.
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10'); //9 temmuz yazar
d = new Date('07-10-2022'); //10 temmuz yazar sebebi linkte

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// Get current timestamp
d = Date.now();

// Get the timestamp of a specific date
d = new Date(); //içine tarih vererek zaman damgası oluiturup oradan hesaplatabiliriz.Yani verdiğimiz tarihin milisaniye cinsinden zaman damgası sonra onu atayıp yazdırırsak o tarihe ulaşırız.
d = d.getTime();
d = d.valueOf();

// Create a date from a timestamp
d = new Date(1666962049745);

// Convert from milliseconds to seconds
d = Math.floor(Date.now() / 1000); //saniye cinsinden zaman damgası

console.log(d);