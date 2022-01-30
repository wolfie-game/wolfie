import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

it('render correctly Input component', () => {
  const ButtonComponent = renderer
    .create(<Button type="button" handler={() => {}}></Button>)
    .toJSON()
  expect(ButtonComponent).toMatchSnapshot()
})
