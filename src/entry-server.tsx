import { renderToString } from 'react-dom/server'

import { App } from './App'

export const render = (): string => renderToString(<App />)
