import React from 'react'
import renderer from 'react-test-renderer'
import Index from '../pages/index'

it('renders homepage unchanged', () => {
  const { act } = renderer
  let tree
  act(() => {
    tree = renderer.create(<Index />)
  })

  expect(tree).toMatchSnapshot()
})
