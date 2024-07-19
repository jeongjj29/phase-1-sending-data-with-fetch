// Add your code here
function submitData(name, email) {
    return fetch ("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const obj = document.body.appendChild(document.createElement("div"));
            obj.innerHTML = `<p id="${object.id}"></p>`
        })
        .catch(function (error) {
            alert("There has been an error.");
            document.body.innerHTML = `<p>${error}</p>`
        });
}

function newObj(obj) {
    
}