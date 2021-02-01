const btns = document.querySelectorAll(".btn-dynamic");
const colors = document.querySelectorAll(".color");
const hashtag = document.querySelector("#hashtag");

colors.forEach((color) => {
  color.style.background = `#${color.id}`;
  color.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.style.background = `#${color.id}`;
      hashtag.style.color = `#${color.id}`;
    });
  });
});
