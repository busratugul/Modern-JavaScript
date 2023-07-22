const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
    //className
    /* console.log(itemList.className);
    itemList.className = "card dark"; */
    //böyle yazarsak var olan sınıfları da eklemeliyiz çünkü siler.Bununla baş etmenin en güzel yolu classList dir.

    //classList
    //console.log(itemList.classList);
//bize list döndürür forEach ile dönebiliriz.
    itemList.classList.forEach((c) => console.log(c));

   /*  text.classList.add("dark");
    text.classList.remove("card"); */


    //toggle(dark) koyu veya açık gibi tonlar yapar ışık yakmak kapatmak gibi.Tw koyu mod açık mod gibi.Açıp kapatabiliriz. toggle(hidden) gizli ya da açık

   // text.classList.toggle("dark");
    //itemList.classList.toggle("hidden");
    text.classList.replace("card", "dark");

    //Doğrudan stil değiştirmek
    itemList.style.lineHeight = "3"

    items.forEach((item, index) =>  {
        item.style.color = "red";

        if(index === 2) {
            item.style.color = "blue";
        }
    })
    
}






document.querySelector("button").onclick = run;
//parantez koyarsak otomatik olarak çalışır.