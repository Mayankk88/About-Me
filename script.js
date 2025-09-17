// Canvas Starfield Animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;

window.addEventListener('resize', () => {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
  stars = genStars();
});

const STAR_NUM = 180;
const STAR_SPEED = 6;
let stars = genStars();

function genStars() {
  let arr = [];
  for (let i = 0; i < STAR_NUM; i++) {
    arr.push({
      x: Math.random() * w - w / 2,
      y: Math.random() * h - h / 2,
      z: Math.random() * w,
    });
  }
  return arr;
}

function drawStars() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < STAR_NUM; i++) {
    let star = stars[i];
    star.z -= STAR_SPEED;
    if (star.z < 1) {
      star.x = Math.random() * w - w / 2;
      star.y = Math.random() * h - h / 2;
      star.z = w;
    }

    let k = 128 / star.z;
    let sx = Math.floor(star.x * k + w / 2);
    let sy = Math.floor(star.y * k + h / 2);

    let r = Math.max(0.6, (1 - star.z / w) * 2.8);
    let alpha = 0.8;

    ctx.beginPath();
    ctx.arc(sx, sy, r, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
  }
  requestAnimationFrame(drawStars);
}
drawStars();


// Navbar smooth scroll and active state
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    smoothScroll(this.getAttribute('href'));
  });
});

// Smooth scroll function
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

// Hamburger menu toggle for mobile
const hamburger = document.getElementById('hamburger');
const navUL = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});

// Reveal animation on scroll
function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach(elem => {
    const top = elem.getBoundingClientRect().top;
    if (top < window.innerHeight - 60) {
      elem.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contact form submission handler (dummy)
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for contacting me! I will reach back soon.');
  this.reset();
});
