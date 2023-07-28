/* 
Js senkron çalışır.Biri biter biri başlar
Asenkron çalışması için setTimeout kullanbiliriz.Mili seconds alır.*/

//setTimeout(changeText,2000)
console.log("Hello from globalscope");
//ilk global sonra callback çalıştı

function changeText() {
    document.querySelector("h1").textContent = "HELLO FROM CALLBACK"
} 
 
const timerId = setTimeout(changeText,3000)

document.querySelector("#cancel").addEventListener("click", () => {
    console.log(timerId);
    clearTimeout(timerId)
    console.log("TIMER CANCELLED");
})

//cleartimeeout timerid ile kullanılıyor.