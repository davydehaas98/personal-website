import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { App } from './App'
import projects from './components/projects/projects.json'

describe('App', () => {
  afterEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
  })

  it('starts dark, switches between light and dark mode and remembers the choice', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(window.localStorage.getItem('theme')).toBe('light')
    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(window.localStorage.getItem('theme')).toBe('dark')
  })

  it('renders the intro, experience, projects and contact sections on one page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Davy de Haas' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Experience' }).id).toBe('experience')
    expect(screen.getByRole('region', { name: 'Projects' }).id).toBe('projects')
    expect(screen.getByRole('region', { name: 'Contact' }).id).toBe('contact')
  })

  it('links the navigation to the sections', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience')
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('links every project to its GitHub repository', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Projects' })
    for (const project of projects) {
      expect(within(section).getByRole('link', { name: new RegExp(project.name) })).toHaveAttribute(
        'href',
        `https://github.com/${project.repository}`,
      )
    }
  })

  it('shows the logos of every project, named for screen readers', () => {
    render(<App />)
    const lists = screen.getAllByRole('list', { name: 'Built with' })
    expect(lists).toHaveLength(projects.length)
    projects.forEach((project, index) => {
      const names = within(lists[index])
        .getAllByRole('listitem')
        .map((item) => item.textContent)
      expect(names).toHaveLength(project.logos.length)
      // A name that is missing from logos.ts would render nothing (or crash), so every name must resolve to a title.
      for (const name of names) {
        expect(name).toBeTruthy()
      }
    })
    expect(within(lists[0]).getByText('Kubernetes')).toBeInTheDocument()
  })

  it('shows the languages of every project', () => {
    render(<App />)
    const lists = screen.getAllByRole('list', { name: 'Languages' })
    expect(
      lists.map((list) =>
        within(list)
          .getAllByRole('listitem')
          .map((item) => item.textContent),
      ),
    ).toEqual(projects.map((project) => project.languages))
  })

  it('shows the tech stack with a name for every logo', () => {
    render(<App />)
    const list = screen.getByRole('list', { name: 'Tech stack' })
    expect(
      within(list)
        .getAllByRole('listitem')
        .map((item) => item.textContent),
    ).toEqual(['Java', 'Spring', 'TypeScript', 'NestJS', 'Python', 'Terraform', 'Kubernetes', 'AWS'])
  })

  it('shows the work, education and Credly badges with dates', () => {
    render(<App />)
    const section = screen.getByRole('region', { name: 'Experience' })
    expect(within(section).getByText('Jan 2022 – Present')).toBeInTheDocument()
    const valley = within(section).getByRole('heading', { name: 'Software Engineering Intern' }).closest('li')!
    expect(valley).toHaveTextContent('Amsterdam')
    expect(valley).toHaveTextContent('Feb 2019 – Jul 2019')
    expect(valley).toHaveTextContent('6 mos')
    expect(within(section).getByRole('heading', { name: 'Certifications' })).toBeInTheDocument()
    // Grouped by issuer (AWS first), a renewed badge only once, and no dates.
    expect(
      within(section)
        .getAllByRole('heading', { level: 4 })
        .map((h) => h.textContent),
    ).toEqual(expect.arrayContaining(['Amazon Web Services', 'Okta']))
    const aws = within(section).getByRole('heading', { name: 'Amazon Web Services' }).parentElement!
    expect(
      within(aws)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(['AWS Certified Developer – Associate', 'AWS Certified Cloud Practitioner'])
    expect(section.querySelector('ul')?.textContent).not.toMatch(/Earned|Expired|Valid until/)
  })

  it('links to GitHub and LinkedIn', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/davydehaas98')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/davydehaas98',
    )
  })
})
