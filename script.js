const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal, .reveal-delay").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = String(new Date().getFullYear());

const DOWNLOAD_LINKS = {
  mac: "mailto:hello@dermrevenuetracker.com?subject=macOS%20Build%20Request",
  windows: "mailto:hello@dermrevenuetracker.com?subject=Windows%20Build%20Request",
  ios: "mailto:hello@dermrevenuetracker.com?subject=iOS%20Build%20Request",
  android: "mailto:hello@dermrevenuetracker.com?subject=Android%20Build%20Request",
};

document.querySelectorAll(".platform-download").forEach((card) => {
  const platform = card.getAttribute("data-platform");
  const href = DOWNLOAD_LINKS[platform] || "mailto:hello@dermrevenuetracker.com";
  card.setAttribute("href", href);
});
