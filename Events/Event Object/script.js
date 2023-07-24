const logo = document.querySelector("img");

function onClick(e) {
   // console.log(e.target);
    // console.log(e.currentTarget);
    // e.target.style.backgroundColor = "black"
    //console.log(e.type); //click
    //console.log(e.timeStamp); //zaman damgası
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);
    // console.log(e.pageX);
    // console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
}

function onDrag(e) {
    document.querySelector("h1").textContent = `X${e.clientX} Y${e.clientY}`;
}

logo.addEventListener("click", onClick);
logo.addEventListener("drag", onDrag);

// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// }); Mesela burada target direkt liyi verirken currentTarget Bubble etkisi ile bir üst elemente bir üst elemente seke seke bodye kadar gelir.Yanid doğrudan bir elemente ihtiyaç varsa target kullanılır.




/*
- `target` - The element that triggered the event (tıkladığımız elementin triggerlanması tıkladığımız an o fotoyu görürüz.)
- `currentTarget` - The element that the event listener is attached to (These are the same in this case(geçerli hedef olay dinleyicisinin bağlı olduğu öğe.)
Aralarındaki fark target direkt elementi hedef gösterir.Ve bir öğeymiş gibi üzerinde çalışmamıza izin verir.
- `type` - The type of event that was triggered(eventin tipini verir)
- `timeStamp` - The time that the event was triggered(triigerlandığı an ki zaman damgası)
- `clientX` - The x position of the mouse click relative to the window(windowda yatay konumu)
- `clientY` - The y position of the mouse click relative to the window(windoesa dikety konumu)
- `offsetX` - The x position of the mouse click relative to the element (öğe içinden koordinatları verir.)
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page (sayfaya göre koordinat)
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen (ekrana göre koordinat)
- `screenY` - The y position of the mouse click relative to the screen



VARSAYILANI ENGELLEMEK:Davranışın engellenmesi mesela bir getirme isteği var ve bir şeyin o sayfaya gönderilmesini istemiyorsunuz o zaman varsayılan engelleyici kullanılır.Mesela html sayfasında bir linki engelleyelim
*/

document.querySelector("a").addEventListener("click", function (e) {
    e.preventDefault()

    console.log("Link was clicked");
});
 