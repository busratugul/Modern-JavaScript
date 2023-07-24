const form = document.getElementById("item-form");

/* function onSubmit(e) {
    console.log("submit");
}
Bu şekildeyken add itema bastığımızda submit consolda gözüküp gidiyor.Sebebi konsol günlüğü oluşutmrası ancak daha sınra gerçek dosyaya göndermesidir.Formda bir eylem niteliği yoksa veya bir tür arka uca gönderiyorsanızbu aynı sayfaya gönderilmelidir.Bunu durdurmak için preventdefault kullanırız.Bu sayede forma gönderilen değerleri alabiliriz. */

function onSubmit(e) {
    e.preventDefault();
    
    const item = document.getElementById ("item-input").value;
    const priority = document.getElementById("priority-input").value;
    //istemediğim öğenin tamamnını vermemesi için .value ekleriz.İster elementi seçerken ister elementi yazdırırken value ekle farketmez.

    //console.log(item, priority.value);
    if(item === "" || priority === "0") {
        alert("Please fill in all fields")
    }

    console.log(item, priority);
}

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    const item = formData.get("item");
    const priority = formData.get("priority");

    const entries = formData.entries();
    console.log(entries);
    //entries içinde döngü yapmamızı veya yinelememizi sağlar.

    for(let entry of entries) {
        console.log(entry[1]);
    }


    //console.log(item, priority);
}


form.addEventListener("submit", onSubmit2);

