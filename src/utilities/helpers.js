export function formatCurrency(value) {
  const indiaValue = value * 80;
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(indiaValue);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
