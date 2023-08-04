  //console.log(x); alınan hata budur uncaught yakalanmamış hata demektir. script.js:1 Uncaught ReferenceError: x is not defined 

 /*  try {
    console.log(x);
  }catch(error) {
    console.log("Error:" + error);
  }  *///Error:ReferenceError: x is not defined

  function double(number) {
    if (isNaN(number)) {
      throw new Error(number + "is not a number")
    }
    return number * 2
  }try{
    const y = double("hello")
    console.log(y);
  }catch(error) {
    console.log(error);
  }