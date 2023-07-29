/* 

veri alacağımıza söz vermek gibi bir işlemdir. Diğer taraftan kod işlemeye devam eder yani senkronşze veya bloklama yapmayan bir işlemdir.Görev tamamlandığında görev ya yerine getirilir ya da red edilir.
resolve tamamlandığında, reject red edildiğinde çağırılır.
 */

    //Promise yaratalım
const promise = new Promise((resolve, reject) => {
    // Asenkron bir görev yapalım
    setTimeout(() => {
        console.log("Async task complete");
        resolve()
    },1000 );
})

promise.then(() => {  //bu bir cb function alır
    console.log("Promise consumed");
}) 

promise.then((user) => console.log(user));

new Promise((resolve, reject) => {
    // Asenkron bir görev yapalım
    setTimeout(() => {
        console.log("Async2 task complete");
        resolve()
    },1000 );
}).then(() => { //then direkt bu şekilde de kullanılır.
    console.log("Promise2 consumed");
})

//Bazen bir promiseden bazı verileri döndürmek isteriz
new Promise((resolve, reject) => {
    // Asenkron bir görev yapalım
    setTimeout(() => {
        resolve({name: "Busra",  age:"50"})
    },1000 );
}).then((user) => console.log(user));



//reject hataları ele almak
const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({name: "Busra",  age:"50"})
        }else {
            reject("Error: Something went wrong")
        }
        
    },1000 );
})

getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))

//vaat resolve ya da reject olsa bile çalışan finally kullanımı
getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log("The promise has been resolved rejected"))


console.log("HELLO FROM GLOBAL SCOPE");
//ilk global yazıldı çünkü asenkron oldu artık ve blok yapmadı diğerleri