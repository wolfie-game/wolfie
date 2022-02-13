import React from 'react'
import Input from './Input'
import renderer from 'react-test-renderer'

it('render correctly Input component', () => {
  const InputComponent = renderer
    .create(<Input type={'text'} name={''} value={''} />)
    .toJSON()
  expect(InputComponent).toMatchSnapshot()
})
