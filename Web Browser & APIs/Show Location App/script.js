//konumumuzu harita üzerinde göstermek 

//burayı siteden copy paste yaparak aslında bir map başlatıyoruz
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


//marker ile konumumuzu göstermek buradaki metodlar kutuphanenin bir parçası jsnin değil
const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13); //bu sayı zoomdur

  //buna popup eklemek istersek
  marker.bindPopup('<strong>Hello World</strong> <br> This is my location');
});
