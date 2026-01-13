function getPhilippinesTimeFormatted() {
  const options = {
    timeZone: "Asia/Manila",
    weekday: "long", // e.g. Tuesday
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // AM/PM format
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(new Date());

  // Build custom format: Tuesday, MM/dd/yyyy HH:mm:ss AM/PM
  const weekday = parts.find((p) => p.type === "weekday").value;
  const month = parts.find((p) => p.type === "month").value;
  const day = parts.find((p) => p.type === "day").value;
  const year = parts.find((p) => p.type === "year").value;
  const hour = parts.find((p) => p.type === "hour").value;
  const minute = parts.find((p) => p.type === "minute").value;
  const second = parts.find((p) => p.type === "second").value;
  const dayPeriod = parts.find((p) => p.type === "dayPeriod").value;

  return `${weekday}, ${month}/${day}/${year} ${hour}:${minute}:${second} ${dayPeriod}`;
}

function showTime() {
  document.getElementById("ph-time").textContent = getPhilippinesTimeFormatted();
}

setInterval(showTime, 1000);