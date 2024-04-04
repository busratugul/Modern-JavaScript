async function getUser() {
    const response = await fetch('https://api.github.com/users/busratugul')
    const data = await response.json()
    console.log(data);
}

getUser()

