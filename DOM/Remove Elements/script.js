//REMOVE & REMOVECHILD remove kaldırmak istediğimiz öğe tarafından çağırılır. RemoveChild üst öğe tarafından çağırılır.

function removeClearButton() {
    //document.querySelector("#clear").remove();
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();

}

function removeFirstItem() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");

    ul.removeChild(li);
}

function remove(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber}`);

    ul.removeChild(li);

}

function remove2(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber-1];

    ul.removeChild(li);

}

function remove3(itemNumber) {
    const li = document.querySelectorAll("li");

    li[itemNumber-1].remove();
}

const remove4 = (itemNumber) => document.querySelectorAll("li")[itemNumber-1].remove();

removeClearButton();
//removeFirstItem();
//remove(3);
//remove2(2)
//remove3(2);
remove4(1);

