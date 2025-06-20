export function useCurrentTheme(): "light" | "dark" {
  return document.documentElement.dataset.theme as "light" | "dark";
}

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("sprouthub-theme", next);
}

export function initializeTheme() {
  const saved = localStorage.getItem("sprouthub-theme") || "light";
  document.documentElement.dataset.theme = saved;
}