const button = document.querySelector(".dynamic-color-btn");
// random color function is just for craeting random number for 0-255 which is for the rgb
const randomColor = () => {
  return Math.floor(Math.random() * 255) + 1;
};
// selecting the heading
const heading = document.querySelectorAll("h2");

// adding click to the button
button.addEventListener("click", () => {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  // we will get different random rgb color and we are adding style through the loop below
  heading.forEach((e, i) => {
    // changing the color for each heading while button is clicked
    e.style.color = `rgb(${r}, ${g}, ${b})`;
  });
});
