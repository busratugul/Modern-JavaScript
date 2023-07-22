//REPLACE / REPLACE WITH


function replaceFirstItem() {
    const firstItem = document.querySelector("li:first-child")

    const li = document.createElement("li");
    li.textContent = "Replaced First";

    firstItem.replaceWith(li);
}


function replaceSecondItem() {
    const secondItem = document.querySelector("li:nth-child(2)");

   /*  const li = document.createElement("li");
    li.textContent = "Replaced Second";

    secondItem.replaceWith(li); */

    secondItem.outerHTML = "<li>Replaced Second</li>";
}

//listedeki tüm öğeleri değiştirmek

function replaceAllItems() {
    const lis = document.querySelectorAll("li");
    //queryselector nodelist döndürür.ForEach kullanılır.
 /*    lis.forEach((item, index) => {
      //  item.outerHTML = "<li>Replace All</li>"
      //item.innerHTML = "Replaced All"
     //indeks bir şeye eşitse değiştirsin
     if(index === 1){
        item.innerHTML = "Second Item"
     }else {
        item.innerHTML = "Replaced All"
     }
    }) */

    lis.forEach(
        (item, index) => 
        (item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>item</li>")
    );
}


function replaceChildHeading() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("header h1");

    const h2 = document.createElement("h2");
    h2.id = "app-title";
    h2.textContent = "Shopping List";
    header.replaceChild(h2, h1);
}

replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();