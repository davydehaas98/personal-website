import { render, screen } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  render(<App />)
  expect(screen.getByRole('navigation')).toBeInTheDocument()
  expect(screen.getByRole('main')).toBeInTheDocument()
})
