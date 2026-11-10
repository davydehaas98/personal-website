// Runs in <head> before the page is drawn: applies the light/dark choice saved by the toggle (src/theme.ts),
// so a visitor whose choice differs from their system setting never sees the wrong colours flash.
try {
  const theme = localStorage.getItem('theme')
  if (theme === 'light' || theme === 'dark') {
    document.documentElement.dataset.theme = theme
  }
} catch {
  // Storage blocked: follow the system setting.
}
