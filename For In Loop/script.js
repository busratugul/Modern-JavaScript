/* For in en çok nesne değişmezinin key ya da valuelerini almak için kullanılır. */


// Loop through objects
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }
  
  // Loop through arrays
  const colorArr = ['red', 'green', 'blue', 'yellow'];
  
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }
/* 
  for (const color in colorArr) {
    console.log(color);
  }
  direkt console.log8("color") yazdırırsak bize keyleri verir. Verileri almak için yine key kullanmalıyız */