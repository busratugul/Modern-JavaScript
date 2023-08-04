//HTTP isteği atıyorum

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}
  //.then zinciri ile verileri işlemek
// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));


//Attığımız http isteğinden async ile verileri işlemek
/* async function getAllData() {
  const movies = await getData("./movies.json")
  console.log(movies);

  const actors = await getData("./actors.json")
  console.log(actors);

  const directors = await getData("./directors.json")
  console.log(directors);
} */

//getdata sadece veriyi döndürür
async function getAllData() {
  const movies = await getData("./movies.json")

  const actors = await getData("./actors.json")

  const directors = await getData("./directors.json")
  console.log(movies,actors, directors);

}


//FETCH API İLE ASYNC AWAIT KULLANMAK

async function getAllDataWithFetch() {
  const moviesRes = await fetch("./movies.json")
  const movies = await moviesRes.json()

  const actorsRes = await fetch("./actors.json")
  const actors = await actorsRes.json()

  const directorsRes = await fetch("./directors.json")
  const directors = await directorsRes.json()

  console.log(movies,actors,directors);
}

async function getAllDataPromiseAll() {
  const [moviesRes,actorsRes,directorsRes]= await Promise.all([
    fetch("./movies.json"),
    fetch("./actors.json"),
    fetch("./directors.json")
  ])

  const movies = await moviesRes.json()
  const actors = await actorsRes.json()
  const directors = await directorsRes.json()

  console.log(movies,actors,directors);
}

//hepsini ayrı ayrı değişkene koymak istemiyorsak;
async function getAllDataPromiseAll2() {
  const [movies,actors,directors]= await Promise.all([
    fetch("./movies.json").then(res => res.json()),
    fetch("./actors.json").then(res => res.json()),
    fetch("./directors.json").then(res => res.json())
  ])

  console.log(movies,actors,directors);
}


//getAllData()
//getAllDataWithFetch()
//getAllDataPromiseAll()
getAllDataPromiseAll2()