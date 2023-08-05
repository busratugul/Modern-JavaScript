//Konum almaya yarayan api window objesine bağlı bir metoddur. navigator.geolocation. içinde clearWatch, watchPsition,getCurrentPosition


//getCurrentPosition-wpden konum yollamak

function curSuccess(pos) {

    const coords = pos.coords;
    console.log(`Latitude: ${coords.latitude}`); //enlem
    console.log(`Longitude: ${coords.longitude}`); //boylam
    console.log(`Within: ${coords.accuracy} meters`); //kaç metre içinde olduğu
}

function curError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
    enableHighaAcuracy: true, //eğer mevcutsa gps kullanacak ve konumu daha doğru hale getirecektir.

    timeout:5000, // bu kadar saniye içinde konum için denemeyi durdurur.

    maximumAge:0 //önceden alınmış bir konumu kullanmaz hep güncel konum alır kullanır.
} 


navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);//3 arguman alır success error options



//watchPosition- navigasyon
const target = {
    latitude: 41.3874387,
    longitude:-71.3904395
}

function watchSuccess(pos) {//konum başarı ile izlenir ve ulaşıldığında vs tetiklenir.
    const coords = pos.coords

    if( target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log("You have reached your destination");
        navigator.geolocation.clearWatch(id) //konum izlemeyi kapatır
    }

}

function watchError(err) { 
    console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
    enableHighaAcuracy: true,

    timeout:5000, 

    maximumAge:0 
}

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);//3 arguman alır success error options






