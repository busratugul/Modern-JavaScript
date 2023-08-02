/* 

get isteği varsayılandır.
Bir gönderi koymak ya da silmek için bunu yöntemlerle apiye bildirmek gerekir.Header göndermek için de ayrı bir başlık seçeneği var.

GET verileri alır
POST gönderi gönderir
PUT yeni veri
PATCH güncelleme
DELETE silme

*/

function createPost({title,body}) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        }), 
        headers: {
            "Content-Type": "application/json",
            token: "BC123",
        }
    }).then((res) => res.json())
    .then((data) => console.log(data))
}

createPost({title: "My Post", body: "This is my post"})

//aldığımız veriyi bir obje olarak aktarmak istedik ancak jsonu önce stringfy ile dizi yaptık daha sonra almak istediğimiz obje özelliklerini girdik responsive döndü then ile yakaladık promise döndü onu da then ile yakaladık ve veriye ulaştık