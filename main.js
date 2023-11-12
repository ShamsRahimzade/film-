
var mainRow = document.querySelector('main .row');

function fillHtml(data) {
    data.forEach(element => {
        mainRow.innerHTML += `
            <div class="card border-light col-md-6 col-sm-12  mb-5 p-4" style="width: 18rem;">
                <img src="${element.image.medium}" class="card-img-top object-fit-none border rounded " alt="${element.name}">
                <div class="card-body">
                    <h5 class=" card-title">${element.name}</h5>
                    <p class=" card-text ">★${element.rating.average}</p>
                    <a href="details.html?id=${element.id}" class="btn btn-#0F041B">Detail</a>
                </div>
            </div>`
    })
}

$.ajax({
    method: "GET",
    url: "https://api.tvmaze.com/shows"
}).done(data => fillHtml(data));

