//htmle canvas etiketi ile eklenir.Jsde de .getcontext metodu ile canvasi kullanırız. 

const canvas = document.getElementById("my-canvas")
const ctx = canvas.getContext("2d")

//basit bir dikdörtgen
ctx.fillStyle = "green"
ctx.fillRect(10,10,150,100) //konum veriyoruz yani x ekseni başlangıcından y ekseni yüksekliğinden başlayan 150ye 100 bir dikdörtgen kodladık

//basit daire
ctx.fillStyle = "red"
ctx.arc(300,300, 100,0, Math.PI * 2) //konum veriyoruz yine ilk x,y,yarıçap sonra formül
ctx.fill()//fillstyle vermezsek son styleı kullanır yani green

//çizgi çizmek
ctx.beginPath()
ctx.strokeStyle = "orange" //çizgiler kontur metodu kullanır fill kullanmaz
ctx.lineWidth = 5 //çizgiyi kalınlaştırmak
ctx.moveTo(10,10)//konum x,y
ctx.lineTo(300,300)
ctx.stroke() 

//metin çizimi
ctx.font = "30px Arial"
ctx.lineWidth= 2
ctx.fillStyle = "blue"
ctx.strokeStyle = "darkblue"
ctx.fillText("Hello World",300,100,300)
ctx.strokeText("Hello World",300,500,300)

//resim çizimi 
const image = document.querySelector("img")
image.style.display = "none" //sayfada gözükmesini istemiyoz

image.addEventListener("load", () => ctx.drawImage(image, 250,250,100,100))
