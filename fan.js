// const fan = document.querySelector(".fan");
// const btn = document.querySelector(".btn");
// const btn2 = document.querySelector(".btn2");
// const stop = document.querySelector(".btnstop");
// btn.addEventListener("click", function () {
//   const chack = fan.classList.contains("fan-rotate2");
//   if (chack) {
//     fan.classList.remove("fan-rotate2");
//   } else {
//     fan.classList.add("fan-rotate1");
//   }
// });

// btn2.addEventListener("click", function () {
//   const chack = fan.classList.contains("fan-rotate2");
//   if (chack) {
//     fan.classList.remove("fan-rotate1");
//   } else {
//     fan.classList.add("fan-rotate2");
//   }
// });

// stop.addEventListener("click", function () {
//   fan.classList.remove("fan-rotate1");
//   fan.classList.remove("fan-rotate2");
// });

const fan = document.querySelector(".fan");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const stop = document.querySelector(".btnstop");
const btnon = document.querySelector(".btnon");
const btn3 = document.querySelector(".btn3");
btn.addEventListener("click", function () {
  fan.classList.add("fan-rotate1");
  fan.classList.remove("fan-rotate2");
  fan.classList.remove("on");
  fan.classList.remove("fan-rotate3");
});

btn2.addEventListener("click", function () {
  fan.classList.remove("fan-rotate1");
  fan.classList.add("fan-rotate2");
  fan.classList.remove("fan-rotate3");
});
btnon.addEventListener("click", function () {
  fan.classList.add("on");
  fan.classList.remove("fan-rotate2");
  fan.classList.remove("fan-rotate1");
  fan.classList.remove("fan-rotate3");
});

btn3.addEventListener("click", function () {
  fan.classList.add("fan-rotate3");
  fan.classList.remove("fan-rotate2");
  fan.classList.remove("fan-rotate1");
  fan.classList.remove("on");
});
stop.addEventListener("click", function () {
  fan.classList.remove("fan-rotate1");
  fan.classList.remove("fan-rotate2");
  fan.classList.remove("on");
  fan.classList.remove("fan-rotate3");
});
