let allcard = document.getElementById("allcard");

fetch("https://api.escuelajs.co/api/v1/users", {})
  .then((res) => res.json())
  .then((data) => {
    let info = data;
    let id = data.id;
    console.log(info);
    for (let i = 0; i < info.length; i++) {
      const all = info[i];
      let div = document.createElement("div");
      let div2 = document.createElement("div");
      let titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.placeholder = "name";
      let priceInput = document.createElement("input");
      priceInput.placeholder = "email";
      priceInput.type = "email";
      let updateBtn = document.createElement("button");
      let updateBtn2 = document.createTextNode("UPDATEBTN");
      updateBtn.appendChild(updateBtn2);

      div2.appendChild(titleInput);
      div2.appendChild(priceInput);
      div2.appendChild(updateBtn);
      div2.className = "div2";
      let img = document.createElement("img");
      let h1 = document.createElement("h1");
      let h2 = document.createElement("h2");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let editBtn = document.createElement("button");
      let editBtn2 = document.createTextNode("EDITBTN");
      let deleteBTN = document.createElement("button");
      let deleteBTN2 = document.createTextNode("DELETE");
      deleteBTN.appendChild(deleteBTN2);
      editBtn.appendChild(editBtn2);
      img.setAttribute("src", all.avatar);
      h1.textContent = all.name;
      h2.textContent = all.role;
      p.textContent = all.email;
      p2.textContent = all.password;

      div.className = "card";
      img.className = "cardimg";

      div.appendChild(img);
      div.appendChild(h1);
      div.appendChild(h2);
      div.appendChild(p);
      div.appendChild(p2);
      div.appendChild(editBtn);
      div.appendChild(deleteBTN);
      // console.log(img);
      // console.log(h1);
      // console.log(h2);
      // console.log(p);
      // console.log(p2);
      allcard.appendChild(div);
      allcard.appendChild(div2);
      div2.style.display = "none";
      editBtn.addEventListener("click", function () {
        return (div2.style.display = "block");
      });
      updateBtn.addEventListener("click", function () {
        h1.textContent = titleInput.value;
        p.textContent = priceInput.value;
        fetch(`https://api.escuelajs.co/api/v1/users/1${id}`, {
          method: "PUT",
          headers: {
            "Content-type": " application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            email: `${priceInput.value}`,
            name: `${titleInput.value}`,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        return (div2.style.display = "none");
      });
      deleteBTN.addEventListener("click", function () {
        div.style.display = "none";
      });
    }
  });
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let urlInput = document.getElementById("url");
let addusers2 = document.getElementById("addusers2");
let addusers = document.getElementById("addusers");
const users = document.getElementById("users");
const editBtn = document.createElement("button");
const editBtn2 = document.createTextNode("EDITBTN");
editBtn.appendChild(editBtn2);
addusers.addEventListener("click", function () {
  users.style.display = "block";
});
addusers2.addEventListener("click", function () {
  users.style.display = "none";
  div.appendChild(urlInput.value);
  div.appendChild(nameInput.value);
  div.appendChild("CUSTOMER");
  div.appendChild(emailInput.value);
  div.appendChild(passwordInput.value);
});
addusers2.addEventListener("click", function () {
  fetch("https://api.escuelajs.co/api/v1/users/is-available", {
    method: "POST",
    headers: {
      "Content-type": " application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      // name: `${nameInput.value}`,
      // email: `${emailInput.value}`,
      // password: `${passwordInput.value}`,
      // avatar: `${urlInput.value}`,
      email: `${emailInput}`,
      password: `${passwordInput}`,
      name: `${nameInput}`,
      avatar: `${urlInput}`,
      role: "customer",
      id: 24,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let deleteBTN = document.createElement("button");
  let deleteBTN2 = document.createTextNode("DELETE");
  deleteBTN.appendChild(deleteBTN2);
  div.className = "card";
  img.setAttribute("src", urlInput.value);
  h1.textContent = nameInput.value;
  h2.textContent = "Customer";
  p.textContent = emailInput.value;
  p2.textContent = passwordInput.value;
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(editBtn);
  div.appendChild(deleteBTN);
  allcard.appendChild(div);
  users.style.display = "none";

  div2.style.display = "none";
  editBtn.addEventListener("click", function () {
    div2.style.display = "block";
  });
  deleteBTN.addEventListener("click", function () {
    div.style.display = "none";
  });
});
