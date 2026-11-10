import { renderToString } from 'react-dom/server'
import App from './App'

// Used at build time by scripts/prerender.js to put the page's HTML into build/index.html.
export const render = (): string => renderToString(<App />)
