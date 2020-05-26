// Create UI Variables
const fav = document.querySelector('link[rel="shortcut icon"]');
const canvas = document.querySelector('.favicon-canvas');
const hues = [184, 278, 0, 46];
let hue = hues[0];
const framesPerHue = 15;
const count = hues.length;
const max = count * framesPerHue;
let currentFrame = 0;

const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(14, 14, 14, 0, (2 * Math.PI), false);

const updateColor = (hue) => {
  ctx.fillStyle = `hsl(${hue}, 100%, 56%)`;
  ctx.fill();
  fav.href = canvas.toDataURL('image.png');
}

const stepColor = () => {
  currentFrame ++;
  currentFrame = currentFrame % max

  let currentHue = hues[Math.floor(currentFrame / framesPerHue)];
  let nextHue = hues[(Math.floor(currentFrame / framesPerHue) + 1) % count];

  hue = (currentHue + ((currentFrame % framesPerHue) * Math.floor(Math.abs(nextHue - currentHue) / framesPerHue))) % 360;
  updateColor(hue);
}

const initFavicon = () => {
  if (canvas.getContext) {
    setInterval(stepColor, 100);
  }
}

export { initFavicon }
