// --- active link --- //
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute('aria-current', 'page')
  }
})






// ----- code pour les CGV  ----//

// void 0 === window._axcb && (window._axcb = []);
// window._axcb.push(function(axeptio){
//   axeptio.mountWidget({
//     service: "contracts",
//     name: "delices-mauriciens-cgv-fr",
//     node: document.getElementById("cgv")
//   })
// })

// ------ scroll button logic -------//
const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
  if (window.scrollY > 500) {
      scrollBtn.style.visibility = "visible";
  } else {
      scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});