
document.body.onload = getGitHubAPI();

function projetosGit(data) {
console.log(data);

    let divSwiper = document.querySelector(".swiper-wrapper");
    data.forEach((item)=>{
      let div = document.createElement("div");
      div.setAttribute("class", "swiper-slide")
      let divImg = document.createElement("div")
      divImg.setAttribute("id", item.name)
      divImg.setAttribute("class", "div-imagem")
      let name = document.createElement("h1");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.innerText = item.description;
      let a = document.createElement("a");  
      a.setAttribute("href", item.html_url);
      a.setAttribute("target", "_blank");
      a.innerText = "Ver Código"
      div.appendChild(divImg)
      div.appendChild(name);
      div.appendChild(description);
      div.appendChild(a);
      divSwiper.appendChild(div);  
      getImg(item.name)     
      })
    
}
function getGitHubAPI() {
    fetch('https://api.github.com/users/LeoTolotti/repos')
    .then(async res => {
      console.log(res);
      if (!res.ok) {
        throw new Error(res.status)
      }
      var data = await res.json()
      projetosGit(data)
    })
    .catch(e => console.log(e))

}
  function getImg(name){
    console.log(name);
    fetch("https://api.github.com/repos/LeoTolotti/" + name + "/contents/public/images")
    .then(async res => {
    console.log(res);
    if (!res.ok) {
      throw new Error(res.status)
    }
    var imgRepositorio = await res.json()
    imgRepositorio.forEach((img)=>{
      if (img.name == "GifPortifolio.gif") {
        let list = document.getElementById(name);
        let urlImg = img.download_url
        let imgCreate = document.createElement('img')
        imgCreate.setAttribute("src", urlImg )
        list.appendChild(imgCreate)
      }
    })
    })
      .catch(e => console.log(e))
}