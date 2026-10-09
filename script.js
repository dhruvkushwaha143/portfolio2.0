var r = document.documentElement;
try {
  var s = localStorage.getItem("th");
  if (s) r.setAttribute("data-theme", s);
} catch (e) {}
document.getElementById("tg").onclick = function () {
  var d =
    r.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  var n = d === "dark" ? "light" : "dark";
  r.setAttribute("data-theme", n);
  try {
    localStorage.setItem("th", n);
  } catch (e) {}
};
var io = new IntersectionObserver(
  function (e) {
    e.forEach(function (x) {
      if (x.isIntersecting) x.target.classList.add("in");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach(function (el) {
  io.observe(el);
});
var roles = [
    "MERN Developer",
    "Web Developer",
    "BCA Student",
    "Problem Solver",
  ],
  ri = 0,
  ci = 0,
  del = false,
  ty = document.getElementById("ty");
(function t() {
  var w = roles[ri];
  ty.textContent = w.slice(0, ci);
  if (!del && ci < w.length) ci++;
  else if (!del) {
    del = true;
    return setTimeout(t, 1200);
  } else if (ci > 0) ci--;
  else {
    del = false;
    ri = (ri + 1) % roles.length;
  }
  setTimeout(t, del ? 45 : 90);
})();
var bo = new IntersectionObserver(
  function (e) {
    e.forEach(function (x) {
      if (x.isIntersecting) {
        x.target.querySelectorAll("i[data-w]").forEach(function (b) {
          b.style.width = b.dataset.w + "%";
        });
      }
    });
  },
  { threshold: 0.2 },
);
bo.observe(document.getElementById("about"));
addEventListener("scroll", function () {
  var d = document.documentElement,
    p = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
  document.getElementById("bar").style.width = p + "%";
  document.getElementById("top").classList.toggle("s", d.scrollTop > 400);
});
document.getElementById("top").onclick = function () {
  scrollTo({ top: 0, behavior: "smooth" });
};
document.getElementById("cf").onsubmit = function (e) {
  e.preventDefault();
  var n = fn.value,
    m = fm.value,
    em = fe.value;
  location.href =
    "mailto:dhruvkushwaha@gmail.com?subject=" +
    encodeURIComponent("Portfolio message from " + n) +
    "&body=" +
    encodeURIComponent(m + "\n\n— " + n + " (" + em + ")");
  document.getElementById("msg").textContent =
    "✅ Your email app is opening. Press Send there to deliver the message.";
};
function tilt(el, max) {
  function mv(x, y) {
    var b = el.getBoundingClientRect(),
      px = (x - b.left) / b.width - 0.5,
      py = (y - b.top) / b.height - 0.5;
    el.style.transform =
      "rotateY(" + px * max + "deg) rotateX(" + -py * max + "deg)";
  }
  el.addEventListener("mousemove", function (e) {
    mv(e.clientX, e.clientY);
  });
  el.addEventListener(
    "touchmove",
    function (e) {
      mv(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true },
  );
  ["mouseleave", "touchend"].forEach(function (ev) {
    el.addEventListener(ev, function () {
      el.style.transform = "";
    });
  });
}
document.querySelectorAll(".card").forEach(function (c) {
  tilt(c, 22);
});
tilt(document.getElementById("ph"), 24);
