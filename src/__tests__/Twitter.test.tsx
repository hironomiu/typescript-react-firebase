import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import Twitter from '../components/Twitter'

// TODO Firebase認証を通す
test('renders learn react link', () => {
  const [, setIsLogin] = useState(false)
  render(<Twitter setIsLogin={setIsLogin} />)
  const linkElement = screen.getByText(/Twitter/i)
  expect(linkElement).toBeInTheDocument()
})
