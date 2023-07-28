/* LOCAL STORAGE
itemleri doğrudan tarayıcıda saklayabilmektir.Kendi tarayıcımızda saklıyoruz ve sadece biz görebiliyoruz.Key/value olarak saklanır.Nesneleri dizleştirip yerel depoda saklarız sonra bunları kullanacağımızda onları çekip bir nesne oluştururuz.

sessionstorage ile farkları localstoragen süresi dolmaz.ancak session sayfa açık olduğu müddetçe vardır.  


localStorage.setItem("name", "Brad")  / key ve value ayarlar
localStorage.getItem("name") / key kullanarak bir value alır.
localStorage.removeItem("name") /key kullanarak değer siler
localStorage.clear() / her şeyi siler
*/