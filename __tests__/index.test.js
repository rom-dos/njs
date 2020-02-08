/* eslint-env jest */
import { render } from '@testing-library/react'
import Index from '../pages/index.js'

test('Index component renders "hello world"', () => {
  const { getByText } = render(<Index />)

  expect(getByText('hello world')).not.toBeNull()
})
