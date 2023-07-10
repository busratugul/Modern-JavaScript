// Function Declaration
function addDollarSign(value) {
    return '$' + value;
  }
  
  // When using declarations, you can invoke the function before the declaration. With expressions, you can not
  console.log(addDollarSign(100));
  
  // Function Expression değer atayarak fonk tanımlama
  const addPlusSign = function (value) {
    return '+' + value;
  }; //fonksiyon sonlarına noktalı virgül konulmaz ama buna koyuluyor.
  
  console.log(addPlusSign(200));

  //normal fonksiyon tanımlaması tanımlanmadan önceki satırlarda çağırılabilir. Ancak değişkene atananlar çağırılamaz. Mutlaka atamadan sonra çağırılması gerekmektedir.

