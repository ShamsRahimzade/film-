var id = window.location.search.slice(4)


var div = document.getElementById("div1")

axios.get(`https://api.tvmaze.com/shows/${id}`)
    .then(response => {
        div.innerHTML = `
<div class="row g-0 p-5">
  <div class="col-2">
    <img src="${response.data.image.medium}" class="img-fluid rounded-start float-end  m-4" alt="${response.data.name}">
    <button type="button" class="btn btn-secondary ">WATCH</button>
    <h5><b>IMDB :</b> ${response.data.rating.average}</h5> 
  </div>
  <div class="col-10">

    <div class="card-body1 m-3">

      <h3 ><b>Name :</b> <b>${response.data.name}</b></h3>
      <p><i><b>Genres :</b></i> ${response.data.genres}</p>
      <p><i><b>Language :</b></i> ${response.data.language}</p>
      <p><i><b>Status :</b></i> ${response.data.status}</p>
      <p><i><b>Time :</b></i> ${response.data.runtime}</p>
      <p><i><b>Day :</b></i> ${response.data.days}</p>
      <p><i><b>Summary:</b></i>${response.data.summary}</p>

    </div>
  </div>
</div>
`
    })