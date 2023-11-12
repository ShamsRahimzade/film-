function bilgiGoster(section) {
    var bilgiElementi = document.getElementById(section + 'Data');

    if (bilgiElementi.style.display === "none" || bilgiElementi.style.display === "") {
        bilgiElementi.style.display = "block";
    } else {
        bilgiElementi.style.display = "none";
    }
}

var ol = document.querySelector("#usersData ol");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(person => {
            ol.innerHTML += `<li>${person.name} ${person.email}</li>`;
        });
    });
