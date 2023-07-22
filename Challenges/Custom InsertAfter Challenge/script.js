function insertAfter (newEl,existingEl) {
   //parentNode de aynı şeyi verir.
    existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling)
}

//new element to insert
 const li = document.createElement("li");
 li.textContent = "Insert Me After!";

 //existing element to insert after 
const firstItem = document.querySelector("li:first-child");

//our custom function
insertAfter(li,firstItem)