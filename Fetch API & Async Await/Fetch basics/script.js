/* 
 */

fetch("./movies.json")
.then(response => {
return response.json()
}) 
.then((data) => {
    console.log(data);
})

//kısayolu

fetch("./movies.json")
.then((response) => response.json())
.then((data) => console.log(data))

//talepte bulunacağımız şeyi aktarıyoruz bu bize bir promise döndürdüğü için .then() kullanıyoruz sonra verilerle napacağımızı kodluyoruz ancak aldığımız şey bir response olacak ve jsona çevirip then ile yakalıyoruz ilk thenden dönen bir sonrakinin argümanı oluyordu 

//tarayıcıdan ayrı olarak yüklenen cdn ile dahil ettiğimiz başka HTTP kütüphaneleri de vardı en iyilerinden biri axiostur.  axios.get().then(data) bu şekilde tek .then ile veriyi yakalarız.


//Fetching from a text file
fetch("./test.txt")
.then((response) => response.text())
.then((data) => console.log(data))

//Fetching from an API
fetch("https://api.github.com/users/busratugul")
.then((response) => response.json())
.then((data) => 
document.querySelector("h1").textContent = data.login);


 