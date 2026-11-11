import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { App } from './App'
import { logoName, logos } from './components/logos/logos'
import projects from './components/projects/projects.json'

const texts = (elements: HTMLElement[]): (string | null)[] => elements.map((element) => element.textContent)

describe('App', () => {
  afterEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
    vi.useRealTimers()
  })

  it('starts dark, switches between light and dark mode and remembers the choice', async () => {
    const user = userEvent.setup()
    const state = (): { theme?: string; stored: string | null } => ({
      theme: document.documentElement.dataset.theme,
      stored: window.localStorage.getItem('theme'),
    })
    render(<App />)
    const start = state()
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    const light = state()
    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))

    expect({ start, light, dark: state() }).toEqual({
      start: { theme: undefined, stored: null },
      light: { theme: 'light', stored: 'light' },
      dark: { theme: 'dark', stored: 'dark' },
    })
  })

  it('renders the intro and the sections on one page, linked from the navigation', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main' })

    expect({
      name: screen.getByRole('heading', { level: 1 }).textContent,
      intro: texts(within(document.getElementById('home')!).getAllByRole('paragraph')),
      sections: screen.getAllByRole('region').map((region) => region.id),
      navigation: within(nav)
        .getAllByRole('link')
        .map((link) => [link.textContent, link.getAttribute('href')]),
    }).toEqual({
      name: 'Davy de Haas',
      intro: [
        'Software Engineer at iO',
        'Eindhoven, North Brabant, The Netherlands',
        'I build backend systems and the infrastructure they run on. At iO I work on software for clients such as Brussels Airport, Signify, Basispoort, Nationale Apotheek and Favorite Gifts, mostly with Java (Spring) and TypeScript (NestJS). At home I run a Kubernetes cluster on Talos Linux, which also hosts this website.',
        'Tech stack',
      ],
      sections: ['experience', 'projects', 'contact'],
      navigation: [
        ['Davy de Haas', '#home'],
        ['Experience', '#experience'],
        ['Projects', '#projects'],
        ['Contact', '#contact'],
      ],
    })
  })

  it('shows every project with its link and logos', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Projects' })

    expect({
      links: projects.map((project) =>
        within(section)
          .getByRole('link', { name: project.name, description: project.description })
          .getAttribute('href'),
      ),
      logos: screen
        .getAllByRole('list', { name: 'Built with' })
        .map((list) => texts(within(list).getAllByRole('listitem'))),
    }).toEqual({
      links: projects.map((project) => `https://github.com/${project.repository}`),
      logos: projects.map((project) => project.logos.map((name) => logos[logoName(name)].title)),
    })
  })

  it('shows the tech stack with a name for every logo', () => {
    render(<App />)
    const list = screen.getByRole('list', { name: 'Tech stack' })

    expect(texts(within(list).getAllByRole('listitem'))).toEqual([
      'Java',
      'Spring',
      'TypeScript',
      'NestJS',
      'Python',
      'Terraform',
      'Kubernetes',
      'AWS',
    ])
  })

  it('shows the work and education with dates, and the Credly badges by issuer', () => {
    // The current job's duration runs up to today.
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date('2026-11-15'))
    render(<App />)
    const section = screen.getByRole('region', { name: 'Experience' })
    const entry = (title: string): { details: (string | null)[]; when: (string | null)[] } => {
      const [details, when] = [...within(section).getByRole('heading', { name: title }).closest('li')!.children]
      return {
        details: [...details.querySelectorAll('p')].map((p) => p.textContent),
        when: [...when.children].map((span) => span.textContent),
      }
    }
    const issuers = within(section)
      .getAllByRole('heading', { level: 4 })
      .filter((heading) => !heading.closest('li'))

    expect({
      current: entry('Software Engineer'),
      internship: entry('Software Engineering Intern'),
      study: entry('MSc Computer Science and Engineering'),
      badges: Object.fromEntries(
        issuers.map((issuer) => [issuer.textContent, texts(within(issuer.parentElement!).getAllByRole('link'))]),
      ),
    }).toEqual({
      current: {
        details: ['iO · Full-time', 'Eindhoven, North Brabant, The Netherlands'],
        when: ['Jan 2022 – Present', '4 yrs 11 mos'],
      },
      internship: {
        details: ['The Valley · Internship', 'Amsterdam, North Holland, The Netherlands'],
        when: ['Feb 2019 – Jul 2019', '6 mos'],
      },
      study: {
        details: ['Eindhoven University of Technology', 'Eindhoven, North Brabant, The Netherlands'],
        when: ['2021 – 2022'],
      },
      // A renewed badge only once, newest first, and no dates.
      badges: {
        'Amazon Web Services': ['AWS Certified Developer – Associate', 'AWS Certified Cloud Practitioner'],
        Okta: ['Okta dev{camps} CIAM Camper'],
      },
    })
  })

  it('links to GitHub and LinkedIn', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Contact' })

    expect(
      within(section)
        .getAllByRole('link')
        .map((link) => [link.textContent, link.getAttribute('href')]),
    ).toEqual([
      ['GitHub', 'https://github.com/davydehaas98'],
      ['LinkedIn', 'https://www.linkedin.com/in/davydehaas98'],
    ])
  })
})
