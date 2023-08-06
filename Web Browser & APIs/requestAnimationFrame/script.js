const image = document.querySelector("img")

//aradaki zamanı almak için
let start
let done = false //durmasını istediğimizde true yapacagız

function step(timestamp) { //timestamp ile func basladigi andan itibaren gecen süreyi alıyoruz.
    if(start === undefined) { //başlangıçta undefined olur
        start = timestamp
    }

    const elapsed = timestamp - start //geçen süreyi buluyoruz

    if(elapsed > 9000) {//2 saniye sonra dur dedik
        done = true
    }
    
    if(done) {
        return
    }
    image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 10}deg)`

    requestAnimationFrame(step)
}

requestAnimationFrame(step)

//bir şeyi canlandırmak için bu arada geçen zamnaı(elapsed) alırız.. Ve cssdeki transform translate ile oynatırız