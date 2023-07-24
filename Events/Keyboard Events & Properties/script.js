const itemInput = document.getElementById("item-input");

const onKeyPress = e => console.log("keypress");
//bastığın an tetiklenir
const onKeyUp = e => console.log("keyup");
//basılı tutunca bişi olmaz kaldırdığın an tetiklenir.
const onKeyDown = e => console.log("keydown");
//Bırakana kadar tetiklenir.


//Hangi tuşlara basıldığını almak istiyorsak
const onKey = e => {
    //key
    /* if(e.key === "Enter") {
        alert("You Pressed Enter")
    }; */
    //document.querySelector("h1").innerText = e.key;

    //keyCode
    //https://www.toptal.com/developers/keycode/table-of-all-keycodes

    if(e.keyCode === 13) {
        alert("You Pressed ENTER")
    }

    //code
    if (e.code === "Digit1") {
        console.log("You Pressed 1");
    }

    if(e.repeat) {
        console.log("You are holding down " + e.key);
    }
    //tuşa dokunduğumda bu konsole işlemez ne zamanki basılı tuttarsam o zaman tekrarlama işlemi başlar.

    console.log("Shift: " + e.shiftKey);//Valoda sessiz yürümek:s yani shift ile bir kombinasyon yapıp yapmadığını kontrol edebiliriz.

    console.log("Control: " + e.ctrlKey);
    console.log("Alt: " + e.altKey);

    if (e.shiftKey && e.key === "W") {
        console.log("Sessiz yürü");
    }
};




// itemInput.addEventListener("keypress", onKeyPress);
//itemInput.addEventListener("keyup", onKeyUp);
//itemInput.addEventListener("keydown", onKeyDown);
itemInput.addEventListener("keydown", onKeyDown);
itemInput.addEventListener("keydown", onKey);