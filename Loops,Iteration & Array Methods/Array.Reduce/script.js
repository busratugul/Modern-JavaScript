/* .Reduce diziyi tek bir değere indirgemek için kullanılır.Mesela farklı fiyatlara sahip ürünlerle dolu olan alışveriş sepetinin toplam fiyatı gibi düşünebiliriz.İki parametresi var previousValue, currentValue . temel olarak son yinelemeden veya  geri çağırmayı çalıştıran son işlevden döndürülen değerdir buna akümülatör de denir.En sonda eklenen sayı başlangıç değeridir. Kaç verirsek ilk onu toplamaya alır.Accumulator 10 olacak mesela.
*/


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

//short version
const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);