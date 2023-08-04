/*  */

const promise = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve({name: "Busra", age: 100});
  },1000)
})

//promise.then(data => console.log(data))

//Genellikle bu şekilde bir promise tanımlamayız fetch ile aktardığımız veri bize bir promise döndürür bu verinin bize aktarılması ne kadar sürecek bilmediğimiz için bunu async await kullanarak asenkron olarak kullanırız.Veri gelirse resolve çalışır gelmezse try catch ile hatayı yakalarız.

async function getPromise() {
  const response = await promise
  console.log(response);
}

//getPromise()

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users") //HTTP isteği yapar ve Response nesnesini döndürür.
  const data = await res.json() // Response nesnesindeki veriyi JavaScript nesnesine dönüştürmek için bir Promise döner ve bu nedenle await ile beklenir.
  console.log(data);
}

getUsers()

asyncgetPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  console.log(data);
}


