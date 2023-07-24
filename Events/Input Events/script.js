const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");


/* yazdığımız başlığa geçecek
function onInput(e) {
    heading.textContent = e.target.value;
}

itemInput.addEventListener("input", onInput); */

function onInput(e) {
    console.log(e.target.value);
}

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ?"Checked" :"Not Checked"
}

function onFocus() {
    console.log("Input is FOCUS");
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineWidth = "1px";
    itemInput.style.outlineColor = "green";
}

function onBlur() {
    console.log("Input is not Focused");
    itemInput.style.outlineStyle = "none";
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("change", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);



//input girilen değeri anlık gönderir.
//keypress basılan tuşları harf harf gönderir.
//change değer seçmek select optionlardan kullanmak mantıklı.
//e.target.checked gibi bir değerle checklenip checklenmediğini kontrol edebiliyoruz.
//focus blur inputa odaklanma ve odaklanmama
