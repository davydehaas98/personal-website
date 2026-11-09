import { render, screen, within } from '@testing-library/react'
import App from './App'
import projects from './components/projects/projects.json'

describe('App', () => {
  it('renders the intro, projects and contact sections on one page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Davy de Haas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact' })).toBeInTheDocument()
  })

  it('links the navigation to the sections', () => {
    render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(nav).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(within(nav).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('links every project to its GitHub repository', () => {
    render(<App />)
    for (const project of projects) {
      expect(screen.getByRole('link', { name: new RegExp(project.name) })).toHaveAttribute(
        'href',
        `https://github.com/${project.repository}`,
      )
    }
  })

  it('links to GitHub and LinkedIn', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/davydehaas98')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/davydehaas98')
  })
})
