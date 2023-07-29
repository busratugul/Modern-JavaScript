/* 
eskiden json yerine Xml veri tipi kullanılırdı ancak json daha temiz ve kullanışlı olduğu için artık genellikle sadece json kullanılır.

open ile isteği açıyoruz.
get ile almak için gönderiyoruz.
send ile alıyoruz.

*/


const xhr = new XMLHttpRequest();

//xhr.open("GET", "./movies.json");

xhr.open("GET","https://api.github.com/users/busratugul/repos")


// readyState has 5 possible values
// - 0: request not initialized-talep başlatılmadı
// - 1: server connection established-bağlantı kuruldu
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function() {
    //console.log(this.readyState); 
    //konsolda 2-3-4 var yani bu talebin alındığını gösterir.

    //console.log(this.status);
    //konsolda 3 200 var yani başarılı

    if(this.readyState === 4 && this.status === 200){
        //console.log(JSON.parse(this.responseText));

        const data = JSON.parse(this.responseText)

       /*  data.forEach(movie => {
            const li = document.createElement("li")
            li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
            document.querySelector("#results").appendChild(li)
        }) */
        data.forEach(repo => {
            const li = document.createElement("li")
            li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
            document.querySelector("#results").appendChild(li)
        })
    }
//yani eğer başarılı bir şekilde verileri aldıysak bize response edilecek bunu alabilmek içinde gelen JSON veriyi(responseText) parse ile normal bir dizi olarak ayrıştırıyoruz ya da verileri bir değişkene koyarız.
}

xhr.send()

