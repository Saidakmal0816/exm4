let url = "https://api.escuelajs.co/api/v1/products";
let allproducts = document.getElementById("allproducts");
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data[2].category.image);
    // console.log(data[2].category.name);
    // let name = data.category.name;
    // let nameMap = name.map(Math.sqrt);
    let infoImage = data;
    console.log(infoImage);
    for (let i = 0; i < infoImage.length; i++) {
      let div = document.createElement("div");
      let modal = document.createElement("div");
      let img3 = document.createElement("img");
      let name3 = document.createElement("h1");
      let title3 = document.createElement("h3");
      let id3 = document.createElement("h3");
      let price3 = document.createElement("h3");
      let description3 = document.createElement("p");
      let editbtn = document.createElement("button");
      let inputTitle = document.createElement("input");
      let inputPrice = document.createElement("input");
      let updateBtn = document.createElement("button");
      let deletebtn = document.createElement("button");
      deletebtn.className = "delete";
      div.className = "div";
      editbtn.addEventListener("click", function () {
        editbtn.style.display = "none";
        modal.appendChild(inputTitle);
        modal.appendChild(inputPrice);
        modal.appendChild(updateBtn);
        modal.style.width = "200px";
        inputTitle.style.marginTop = "85px";
        inputTitle.style.width = "200px";
        inputTitle.style.height = "30px";
        inputPrice.style.height = "30px";
        inputPrice.style.width = "200px";
        inputPrice.type = "number";
        inputTitle.style.marginBottom = "25px";
        updateBtn.style.marginTop = "25px";
        updateBtn.style.padding = "20px";
        inputTitle.placeholder = "Title update";
        inputPrice.placeholder = "Price update";
        updateBtn.addEventListener("click", function () {
          title3.textContent = inputTitle.value;
          price3.textContent = inputPrice.value;
          modal.style.display = "none";
          editbtn.style.display = "block";
          let a = fetch(`https://api.escuelajs.co/api/v1/products/${id3}`, {
            method: "PUT",
            body: JSON.stringify({
              title: `${inputTitle.value}`,
              price: `${inputPrice.value}`,
            }),
          })
            .then((res) => res.json())
            .then((Data) => console.log(Data));
        });
      });

      let name2 = document.createTextNode(infoImage[i].category.name);
      let title2 = document.createTextNode(infoImage[i].title);
      let id2 = document.createTextNode(infoImage[i].id);
      let price2 = document.createTextNode(infoImage[i].price);
      let description2 = document.createTextNode(infoImage[i].description);
      let editbtn2 = document.createTextNode("EDITBTN");
      let updateBtn2 = document.createTextNode("UPDATE");
      let deletebtn2 = document.createTextNode("DELETE");
      //   img3.appendChild(img2);
      name3.appendChild(name2);
      title3.appendChild(title2);
      id3.appendChild(id2);
      price3.appendChild(price2);
      description3.appendChild(description2);
      editbtn.appendChild(editbtn2);
      updateBtn.appendChild(updateBtn2);
      deletebtn.appendChild(deletebtn2);

      div.appendChild(img3);
      div.appendChild(name3);
      div.appendChild(title3);
      div.appendChild(id3);
      div.appendChild(price3);
      div.appendChild(description3);
      div.appendChild(editbtn);
      div.appendChild(deletebtn);
      img3.style.width = "300px";
      img3.style.height = "250px";
      div.style.width = "300px";
      div.style.padding = "15px";
      allproducts.style.display = "flex";
      allproducts.style.flexWrap = "wrap";
      allproducts.appendChild(div);
      allproducts.appendChild(modal);

      //   console.log(info);
      //   console.log(name2);
      //   console.log(title2);
      //   console.log(id2);
      //   console.log(description2);
      //   console.log(price2);
      //   const name = infoImage[i].category.name;
      //   const title = infoImage[i].title;
      //   const id = infoImage[i].id;
      //   const price = infoImage[i].price;
      //   const description = infoImage[i].description;
      img3.setAttribute("src", infoImage[i].images[1]);
      deletebtn.addEventListener("click", function () {
        div.style.display = "none";
      });
      deletebtn.style.marginLeft = "20px";
    }
  });

let btn = document.getElementById("addbtn");
let post = document.querySelector(".Post");
let imagesInput = document.getElementById("imagesInput");
let titleinput = document.getElementById("titleinput");
let priceInput = document.getElementById("priceInput");
let inputID = document.getElementById("inputID");
let descriptionInput = document.getElementById("descriptionInput");
btn.addEventListener("click", function () {
  post.style.display = "block";
});
let addPost = document.getElementById("addPost");
addPost.addEventListener("click", function () {
  post.style.display = "none";
  let div2 = document.createElement("div");
  let title = document.createElement("h3");
  let price = document.createElement("h3");
  let description = document.createElement("p");
  description.className = "description";
  let categoryId = document.createElement("h3");
  let img = document.createElement("img");
  img.src = imagesInput.value;
  title.textContent = titleinput.value;
  price.textContent = priceInput.value;
  categoryId.textContent = inputID.value;
  description.textContent = descriptionInput.value;
  div2.appendChild(img);
  div2.appendChild(title);
  div2.appendChild(categoryId);
  div2.appendChild(price);
  div2.appendChild(description);
  allproducts.appendChild(div2);
  console.log(div2);
  div2.style.width = "300px";
  img.style.width = "300px";
  img.style.height = "200px";
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-type": " application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      title: `${title.value}`,
      price: `${priceInput.value}`,
      description: `${descriptionInput.value}`,
      categoryId: `${categoryId.value}`,
      image: `${[imagesInput.value]}`,
    }),
  })
    .then((res) => res.JSON())
    .then((data) => console.log(data));
  console.log(dom);
});
