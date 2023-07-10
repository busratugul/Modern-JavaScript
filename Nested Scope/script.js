
//nested yani iç içe geçmiş fonksiyonlarla kapsamın kullanım şekli;

    function first() {
    const x = 100;
  
    function second() {
      const y = 200;
      console.log(x + y);
    }
  
    // console.log(y);
  
    second();
  }
  
  first(); //parent fonksiyondan childlara erişilebilir.
  
  if (true) {
    const x = 100;
  
    if (x === 100) {
      const y = 200;
      console.log(x + y); //ancak parentta childdan erişilebilir.
    }
  
    console.log(y); //hata verir. blockun dışından y ye erişemeyiz.
  }