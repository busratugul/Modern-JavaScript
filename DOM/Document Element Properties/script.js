let output;

// document.all is deprecated 
output = document.all;
output = document.all[11];
output = document.all.length;

// Everything in the html tags
output = document.documentElement;

// Head and body tags
output = document.head;
output = document.body;

// HTMLCollection of everything in head/body
output = document.head.children;
output = document.body.children;

// Random properties
output = document.doctype;
output = document.domain;//local host
output = document.URL; //url
output = document.characterSet; //dil utf
output = document.contentType; //içerik tipi

// Get all forms
output = document.forms;
output = document.forms[0]; //belirli bir forma ulaşmak için
output = document.forms[0].id; 
output = document.forms[0].method; //default olarak get metodudur.
output = document.forms[0].action;

// Change a form id
document.forms[0].id = 'new-id'; 

// Get all links
// output = document.links; //linkleri verir
// output = document.links[0]; //belli bir linki çekeriz.
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Get all images
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Turn an HTMLCollection into an array
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);

//html koleksiyonu bir dizi gibi gözükse de dizi değildir.ForEach ile dönebilmek için önce onu Array yapmak gerekir. 