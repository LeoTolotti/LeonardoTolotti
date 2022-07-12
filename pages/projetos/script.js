
document.body.onload = getGitHubAPI();

function projetosGit(data) {
console.log(data);

    let ul = document.querySelector(".projetosList");
    data.forEach((item)=>{
      let li = document.createElement("li");
      let name = document.createElement("h1");
      name.innerText = item.name;
      let description = document.createElement("p");
      description.innerText = item.description;
      let a = document.createElement("a");  
      a.setAttribute("href", item.html_url);
      a.setAttribute("target", "_blank");
      a.appendChild(name);
      a.appendChild(description);
      li.appendChild(a);   
      ul.appendChild(li)
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
