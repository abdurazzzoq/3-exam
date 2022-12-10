const elResult = document.querySelector("#posts");
const elBtn = document.querySelector("#btn");
const elSearch = document.querySelector("#search");
const elForm = document.querySelector("form");

function rederPosts(element) {
  elResult.innerHTML = "";
  data.forEach((data) => {
    const newDiv = document.createElement("div");
    newDiv.className = "col-3 mt-5";
    newDiv.innerHTML = `
                          <div class="card" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="card-title">${data.name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">${data.email}</h6>
                              <p class="card-text">${data.body}</p>
                             
                              <button data-id=${data.id} class="btn btn-danger">delete</button>
                            </div>
                          </div>
                          `;
    elResult.appendChild(newDiv);
  });
}

elResult.addEventListener("click", function (e) {
  const element = e.target;

  if (e.target.matches(".btn-danger"));
  console.log("btn");

  const id = element.dataset.id;

  const removedArray = data.filter(function (data) {
    if (data.id !== Number(id)) {
      return data;
    }
  });
  data = removedArray;
  rederPosts(removedArray);
});

// elSearch.addEventListener("input", function (element) {
// const value = elSearch.value;
// console.log(value);

// filteredArray= data.filter((data)=> {
//     if(data.name.toLowerCase().match(value.toLowerCase()) ||
//     data.email.toLowerCase().match(value.toLowerCase())  ) {
//         return data;
// }
// });
// rederPosts(filteredArray);
// // console.log(filteredArray);
// });

elForm.addEventListener("keyup", (evt) => {
  evt.preventDefault();
  elSearch.textContent= ''
  const elSearchValue = elSearch.value.trim();
  const elRegEx = new RegExp(elSearchValue, "gi");

  const filterItem = data.filter((elementTitle) =>
    elementTitle.name.match(elRegEx)
  );

  if (filterItem.length > 0) {
    rederPosts(filterItem);
  } else {
    alert("Bunday malumot yoqserverda");
  }
});

rederPosts(data);

// function renderPosts() {

//     const elName = e.target.name.value;
//     const elEmail = e.target.email.value;
//     const elBody = e.target.body.value;
//     const newPosts = {
//         id: data.length,
//         name: elName,
//         email: elEmail,
//         body: elBody,
//     };
//     console.log(data.length);
// }
// rederPosts();

// const title = document.createElement("h5");
// const email = document.createElement("p");
// const about = document.createElement("p");

// li.appendChild(name);
// li.appendChild(email);
// li.appendChild(about);
