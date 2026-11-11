import { render } from './entry-server'

describe('pre-rendering', () => {
  it('renders the whole page to HTML without a browser theme', () => {
    const html = render()

    expect({
      heading: /<h1[^>]*>Davy de Haas<\/h1>/.test(html),
      sections: [...html.matchAll(/<section id="([^"]+)"/g)].map((match) => match[1]),
      toggle: /aria-label="(Switch to \w+ mode)"/.exec(html)?.[1],
    }).toEqual({
      heading: true,
      sections: ['home', 'experience', 'projects', 'contact'],
      // Always dark here; the browser switches to a saved light choice after hydrating.
      toggle: 'Switch to light mode',
    })
  })
})
