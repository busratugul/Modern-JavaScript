//eskiden script htmlin başına yazılırdı ve bu durumda da script dom yuklenmeden calıstıgı ıcın coğu şey tanımlanamazdı bunun için de onload kullanılıyordu.

// ONLOAD

/* window.onload = function() {
    document.querySelector("h1").textContent = "Hello World"
}  */

//LOAD 

window.addEventListener(
    "load",
    () => {
    console.log("Page loaded....");
}); 


window.addEventListener(
    "DOMContentLoaded",
    () => {
    console.log("DOM loaded....");
});

//aralarındaki far load ve DOMContentLoaded load resim vb. tüm kaynaklar dahil olmak üzere tüm sayfanın yüklenmesini beklemesşi, Dom ise ayrıştırılıp yüklenir yüklenmez çalışmasıdır.İlk önce dom yuklenir glovbal tanımlanmıs bir consol leg ise ilk yazılır çünkü sayfa bekleten hiçbir elementin içinde değil.

console.log( "run me");


//defer
 document.querySelector("h1").innerText = "Hello World";
 //bunun çalışma sebebi ise (hata vermeme sebebi) oldukça yeni bir özellik olan HTML script koduna yazdığımız defer attributesidir.Jsnin sayfa ve dom yüklenene kadar çalışmasını erteler.


 //resize
 window.addEventListener("resize", () => {
    document.querySelector("h1").innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
 });


//
window.addEventListener("scroll", () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

    if(window.scrollY > 70) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
 });

 window.addEventListener("focus", () => {
    document.querySelectorAll("p").forEach((p) => {
        p.style.color = "blue"
    });
 });

 window.addEventListener("blur", () => {
    document.querySelectorAll("p").forEach((p) => {
        p.style.color = "black"
    })
 });
