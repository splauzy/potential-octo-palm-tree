let typesNode = document.querySelector(`.types`);

for (let i=0; i<types.length; i++){
    let type = types[i];

    typesNode.innerHTML += `
            <div class="col">
              <div class="card card-type h-100" href="#">
                <img src="${type.img}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h6 class="card-title">${type.title}</h6>
                  <span><img class="img-spanlike" src="assets/heart (1).png" alt="">${type.likes}</span>
                  
                </div>
              </div>
            </div>`;
}