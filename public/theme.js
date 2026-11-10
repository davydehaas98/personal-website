// Runs in <head> before the page is drawn: applies the light/dark choice saved by the toggle (src/theme.ts),
// so a visitor who picked light never sees the dark default flash.
try {
  const theme = localStorage.getItem('theme')
  if (theme === 'light' || theme === 'dark') {
    document.documentElement.dataset.theme = theme
  }
  if (theme === 'light') {
    // The browser's toolbar colour on phones; dark (#0a0a0b) is the default in index.html.
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#ffffff')
  }
} catch {
  // Storage blocked: stay dark.
}
