//Success-200

/* fetch("http://httpstat.us/200").then((response) => {
  return response
})
.then(() => {
  console.log("success");
}) */


//ERROR-404
/* fetch("http://httpstat.us/400").then((response) => {
  return response
})
.then(() => {
  console.log("success");
})
.catch(error => {
  console.log(error);
})    bu şekilde hata kodu çalışmaz çünkü fetch api bu konuda biraz daha manueldir yanıtı kontrol etmemiz ya da hata kodunu kontrol etmemiz gerekmektedir */


//TypeError: Failed to fetch aldığımız hata budur bu da hatanın ağ da olduğunu söyler
/* fetch("http://hello123.net")
.then((response) => {
  return response
})
.then(() => {
  console.log("success");
})
.catch(error => {
  console.log(error);
})
 */
/* 404 gibi hataları ise yakalamanın bir kaç yolu vardır 
-responseu kontrol edebiliriz.
.then((response) => {
  console.log(response.ok) veya
  console.log(response.statusText) veya
  console.log(response.status)
  return response
}) ama en kolayı yapacağımız yöntemdir*/

/* fetch("http://httpstat.us/404")
.then((response) => {
  if(!response.ok) {
    throw new Error("Request Failed!")
  }
  return response
})
.then(() => {
  console.log("success");
})
.catch((error) => {
  console.log(error);
}) */

/* Ama başka hata kodlarına sahip olabiliriz bunu kontrol edemeyiz. Bu yüzden her şeyi kontrol edebildiğimiz bu yöntem daha mantıklıdır. */
fetch("http://httpstat.us/201")
.then((response) => {
  if(response.text === 404)  {
    throw new Error("Not Found!")
  }else if(response.status === 500) {
    throw new Error("Server Error")
  }else if(response.status !== 200) {
    throw new Error ("Request Failed")
  }
  return response
})
.then(() => {
  console.log("success");
})
.catch((error) => {
  console.log(error);
})

/* 200 kontrolü için randomuser generator kodlarında çalışacağız.

function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then((res) => {
      if (!res.ok) {
        throw new Error('Request Failed');
      }

      return res.json();
    })
    .
    .
    .
     hideSpinner();
      document.querySelector('#user').innerHTML = `
      <p class="text-xl text-center text-red-500 mb-5">
      ${error}</p>`;
    });
}
 */