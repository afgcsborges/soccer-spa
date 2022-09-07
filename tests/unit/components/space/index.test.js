import React from 'react'
import Space from 'components/space'
import { shallow } from 'enzyme'

describe('Space component tests', () => {
    it('should match snapshot with default props', () => {
        const wrapper = shallow(<Space />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Styled(Space)').props().align).toBe('start')
        expect(wrapper.find('Styled(Space)').props().direction).toBe('horizontal')
        expect(wrapper.find('Styled(Space)').props().size).toBe('middle')
    })

    it('should match snapshot with given props', () => {
        const wrapper = shallow(<Space align="end" direction="vertical" size="large" />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Styled(Space)').props().align).toBe('end')
        expect(wrapper.find('Styled(Space)').props().direction).toBe('vertical')
        expect(wrapper.find('Styled(Space)').props().size).toBe('large')
    })
})
