let qte = Array.from(document.querySelectorAll(".qte"));
let plus = Array.from(document.querySelectorAll(".btnplus"));
let moins = Array.from(document.querySelectorAll(".btnmoins"));
let fav = Array.from(document.querySelectorAll(".fa-heart"));
let delet = Array.from(document.querySelectorAll(".btndelet"));
let secteur = Array.from(document.querySelectorAll(".secteur"));
let total = document.querySelector(".total");
let price = Array.from(document.querySelectorAll(".pricee"));

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
    somme();
  });
}
for (let i = 0; i < moins.length; i++) {
  moins[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
      somme();
    }
  });
}

for (let i = 0; i < fav.length; i++) {
  fav[i].addEventListener("click", function () {
    if (fav[i].style.color === "red") {
      fav[i].style.color = "black";
    } else {
      fav[i].style.color = "red";
    }
  });
}
for (let i = 0; i < delet.length; i++) {
  delet[i].addEventListener("click", function () {
    secteur[i].remove();
    somme();
  });
}

function somme() {
  let qte = Array.from(document.querySelectorAll(".qte"));
  let price = Array.from(document.querySelectorAll(".pricee"));
  let s = 0;
  for (let i = 0; i < qte.length; i++) {
    s += qte[i].innerHTML * price[i].innerHTML;
  }
  total.innerHTML = s;
}
