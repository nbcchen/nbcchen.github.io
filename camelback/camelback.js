// Set Summer 2026 date (June 21)
const summer2026 = new Date("2025-12-21T09:00:00Z").getTime();

// Update countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = summer2026 - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").innerText = "Camelback time!";
  }
}, 1000);
