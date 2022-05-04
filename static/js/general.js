const projects_grid = document.querySelector('#projects_grid');
const get_json = new Promise(function(resolve, reject){
  var http = new XMLHttpRequest();
  http.open('GET', '/get_json');
  http.onreadystatechange = function() {
    if(http.readyState==4 && http.status==200) {
      const resp = JSON.parse(http.responseText);
      
      if(resp.status == 1) {
        resolve(resp.json);
      }else{
        reject(resp.message);
      }
    }else{
      console.log(`readyState: ${http.readyState}`);
      console.log(`status: ${http.status}`);
    }
  }
  http.send(null);
});

get_json.then(function(resolved) {
  resolved = JSON.parse(resolved);
  for(var project of resolved.projects) {
    const elem = create_project_card(project);
    var contHTML = projects_grid.innerHTML;
    contHTML += elem;
    projects_grid.innerHTML = contHTML;
  }
}, function(rejected) {
  alert(rejected);
});

function create_project_card(project) {
  const element = `
  <div class="col-sm-6 col-lg-4 all">
    <div class="box">
      <div>
        <div class="img-box">
          <img src="${project.img_url}" alt="">
        </div>
        <div class="detail-box">
          <h5>
            ${project.name}
          </h5>
          <p>
            ${project.desc}
          </p>
          <div class="options">
            ${project.progress?'<div class="in_progress-div">In progress</div>':''}
            ${project.progress?'<a class="inactive">View</>':'<a href=' + project.path + ' target="_blank" >View</a>'}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  return element;
}