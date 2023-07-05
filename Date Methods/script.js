

let x;
let d = new Date(); //şu anı verir

// Date methods

x = d.toString();


//Mili saniye cinsinden tarih damgasını verir.
x = d.getTime();
x = d.valueOf();

x = d.getFullYear(); //Sadece yıl

x = d.getMonth(); //Sadece ay index 0
x = d.getMonth() + 1;

x = d.getDate(); //Ayın günü

x = d.getDay();// Haftanın günü (sayı)

x = d.getHours(); //saat

x = d.getMinutes(); //dakika

x = d.getSeconds(); //saniye

x = d.getMilliseconds(); 

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d); //bulunduğumuz yere göre

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
//Uzun olarak ayı verir October gibi


//local tarih almanın kısayolu
x = d.toLocaleString('default', { month: 'short' }); // Oct yazar

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);