document.body.innerHTML=`
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
  <div  class="search_container">
  <h1 class="title_lorum">Lorem Picsum</h1>
    <form class="d-flex" id="form">
      <input type="number" id="width" class="form-control me-2" type="search" placeholder="width..." aria-label="Search">
      <input type="number" id="height" class="form-control me-2" type="search" placeholder="height..." aria-label="Search">
      <button type="submit" value="Get Image" class="btn btn-outline-success" type="submit">Get Pic...</button>
    </form>
    <img src="https://picsum.photos/id/237/200/300" alt="" id="img">
    </div>
  </div>
</nav>`

    var form = document.getElementById("form")

    form.addEventListener('submit',function(event){
    event.preventDefault()  
        var width = document.getElementById('width').value
        var height=document.getElementById('height').value

        var url=`https://picsum.photos/${width}/${height}`
        var image = document.getElementById("img")
        image.src=url

    })      