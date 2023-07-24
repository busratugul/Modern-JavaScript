//html koduna onclick özelliği ekleyebiliriz onclik="alert("clear") gibi
//veya onclick = "onClear()" diye bir fonksiyon ekleyebiliriz.Sonra bunu js de kodlarız.
 
function onClear() {
  const itemList = document.querySelector("ul");
  const items = itemList.querySelectorAll("li");

  /*3. yol 
  while (itemList.firstChild) {
  itemList.removeChild(itemList.firstChild);
  } */

  /* 2.yol 
  items.forEach((item) => item.remove()); */


  //1. yol 
  itemList.innerHTML = ""
} 
/* ancak tavsiye edilmez htmlin olay dinleyicileri ile darmadağın olmasını istemeyiz. */

//JavaScript Event Listener bu şekilde bir tuşa iki event eklesek ilkini çalıştırmaz sadece biri ve sonuncuyu çalıştırır.

const clearBtn = document.querySelector("#clear");

/* clearBtn.onclick = function() {
  alert("Clear Items");
}
 */

//addEventListener() tavsiye edilen budur.İki eventıda aynı anda çalıştırır.
//Alert senkrondur.Diğer işlemi engellerler bitince diğerini çalıştırırlar.

clearBtn.addEventListener("click", onClear);

//RemoveEventListener()

//setTimeout(() => clearBtn.removeEventListener("click",onClear),5000);


//setTimeout(() => clearBtn.click() ,5000);



