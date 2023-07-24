/* 
 button-div-body-html-document
 mesela butona tıkladığımızda bubble ağacında yukarıya doğru bir köpürme olacaktır.

 buttona basınca eventlistenerı olan her parentı da ateşlenecektir.
*/

const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
    alert("Button was clicked");
    e.stopPropagation();
})

div.addEventListener("click", () => {
    alert("Div was clicked")
})

form.addEventListener("click", () => {
    alert("Form was clicked")
})

document.body.addEventListener("click",() => {
    alert("Body was clicked")
})


//bunun olmasını istemediğimiz durumlar olabilir çünkü bu uygulamamızı mahveder. Bu yüzden bubbling durdurma yöntemi devreye girer.stopPropagation()