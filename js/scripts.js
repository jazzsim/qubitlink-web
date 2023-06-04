const circle = document.querySelector("#circle");
const text = circle.dataset.text;
const characters = text.split("");

const deltaAngle = 360 / characters.length;
const distanceFromCenter = 256;

characters.forEach((character, index) => {
  const span = document.createElement("span");
  span.innerText = character;

  const rotateY = `rotateY(${index * deltaAngle}deg)`;
  const translateZ = `translateZ(${distanceFromCenter}px)`;
  span.style.transform = `${rotateY} ${translateZ}`;

  circle.appendChild(span);
});
const circle2 = document.querySelector("#circle-2");
const text2 = circle2.dataset.text;
const characters2 = text2.split("");

const deltaAngle2 = 360 / characters2.length;
const distanceFromCenter2 = 256;

characters2.forEach((character, index) => {
  const span = document.createElement("span");
  span.innerText = character;

  const rotateY = `rotateY(${index * deltaAngle2}deg)`;
  const translateZ = `translateZ(${distanceFromCenter2}px)`;
  span.style.transform = `${rotateY} ${translateZ}`;

  circle2.appendChild(span);
});
