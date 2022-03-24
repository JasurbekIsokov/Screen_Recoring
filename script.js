"use script";

const picture1 = document.querySelector(`.container_left`);
const picture2 = document.querySelector(`.container_right`);
const elementH31 = document.querySelector(`.paragraph1`);
const elementH32 = document.querySelector(`.paragraph2`);

picture1.addEventListener(`mouseenter`, function (a) {
  picture1.style.width = "70%";
  picture2.style.width = "30%";
  elementH31.style.opacity = 1;
  elementH32.style.opacity = 0;
});

picture2.addEventListener(`mouseenter`, function (a) {
  picture2.style.width = "70%";
  picture1.style.width = "30%";
  elementH32.style.opacity = 1;
  elementH31.style.opacity = 0;
});
