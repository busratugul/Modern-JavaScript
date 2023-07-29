

function toggle(e) {
    e.target.classList.toggle("danger")
}

document.querySelector("button").addEventListener("click", toggle)

/* bu bir fonksiyona aktarılan bir geri çağırmadır eğer direkt toggle() deseydim addEventListenerdan sonra o zaman tıklamamız beklenmezdi ve hata alırdım bu yüzden bir callback parantez almaz.*/

const posts = [
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
]

function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb() //bu bir callbacktir yeni post eklenene kadar getpost func çalıştırmıyor.cb genel bir adlandırmadır.
    },2000)
}

function getPosts() {
    setTimeout(() => {
        posts.forEach(function(post) {
            const div = document.createElement("div")
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
            document.querySelector("#posts").appendChild(div)
        })
    },1000)
}

createPost({title: `Post Three`, body: `This is post three` }, getPosts)

