import { render, screen } from '@testing-library/react'
import Twitter from '../components/Auth/Twitter'

describe('Twitter', () => {
  it('test', () => {
    render(<Twitter />)
    const linkElement = screen.getByText(/Twitter/i)
    expect(linkElement).toBeInTheDocument()
  })
})
