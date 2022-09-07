import DisplayBox from 'components/display-box'
import React from 'react'
import { shallow } from 'enzyme'

it('should match snapshot,label and value', () => {
    const wrapper = shallow(<DisplayBox label="SOME_LABEL" value="SOME_VALUE" />)

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('Text').at(0).props().label).toBe('SOME_LABEL')
    expect(wrapper.find('Text').at(1).props().label).toBe('SOME_VALUE')
})
