import { render } from './entry-server'

describe('pre-rendering', () => {
  it('renders the whole page to HTML without a browser theme', () => {
    const html = render()
    expect(html).toContain('<h1')
    expect(html).toContain('Davy de Haas')
    expect(html).toContain('id="projects"')
    expect(html).toContain('id="contact"')
    // The pre-rendered toggle always starts as dark; the browser corrects it after hydrating.
    expect(html).toContain('aria-label="Switch to light mode"')
  })
})
