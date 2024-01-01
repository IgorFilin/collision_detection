const canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const mousePosition = {
  x: 0,
  y: 0,
};

// animation
const animation = () => {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //
  if (
    mousePosition.x + 200 >= canvas.width / 2 - 100 &&
    mousePosition.x <= canvas.width / 2 + 100 &&
    mousePosition.y + 200 >= canvas.height / 2 - 100 &&
    mousePosition.y <= canvas.height / 2 + 100
  ) {
    ctx.fillStyle = "black";
  } else {
    ctx.fillStyle = "red";
  }

  ctx.fillRect(canvas.width / 2 - 100, canvas.height / 2 - 100, 200, 200);

  // blue
  ctx.fillStyle = "blue";
  ctx.fillRect(mousePosition.x, mousePosition.y, 200, 200);
};

animation();

// listenrs

addEventListener("mousemove", (e) => {
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
});
