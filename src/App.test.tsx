import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import projects from './components/projects/projects.json'

describe('App', () => {
  afterEach(() => {
    window.localStorage.clear()
    delete document.documentElement.dataset.theme
  })

  it('switches between light and dark mode and remembers the choice', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(window.localStorage.getItem('theme')).toBe('dark')
    await user.click(screen.getByRole('button', { name: 'Switch to light mode' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    expect(window.localStorage.getItem('theme')).toBe('light')
  })

  it('renders the intro, projects and contact sections on one page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Davy de Haas' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Projects' }).id).toBe('projects')
    expect(screen.getByRole('region', { name: 'Contact' }).id).toBe('contact')
  })

  it('links the navigation to the sections', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
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
      const names = within(lists[index]).getAllByRole('listitem').map((item) => item.textContent)
      expect(names).toHaveLength(project.logos.length)
      // A name that is missing from logos.ts would render nothing (or crash), so every name must resolve to a title.
      for (const name of names) {
        expect(name).toBeTruthy()
      }
    })
    expect(within(lists[0]).getByText('Kubernetes')).toBeInTheDocument()
  })

  it('links to GitHub and LinkedIn', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/davydehaas98')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/davydehaas98')
  })
})
