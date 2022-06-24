document.body.onload = getGitHubAPI();

function projetosGit(data) {
console.log(data);

    let list = document.getElementById("projetos-git");
    data.forEach((item)=>{
        let a = document.createElement("a");
        let name = document.createElement("h1");
        let description = document.createElement("p");
        a.setAttribute("href", item.html_url)
        a.setAttribute("target", "_blank")
        name.innerText = item.name;
        description.innerText = item.description;
        a.appendChild(name)
        a.appendChild(description)
        list.appendChild(a);    
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
 
  