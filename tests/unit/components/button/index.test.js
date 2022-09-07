import Button from 'components/button'
import React from 'react'
import { shallow } from 'enzyme'

it('should onClick event be called', () => {
    const onClickFn = jest.fn()

    const wrapper = shallow(<Button label="SOME_LABEL" onClick={onClickFn} />)

    expect(wrapper).toMatchSnapshot()
    wrapper.find('Styled(Button)').props().onClick()

    expect(onClickFn).toHaveBeenCalled()
})
