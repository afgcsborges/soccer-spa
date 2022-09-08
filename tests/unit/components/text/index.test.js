import React from 'react'
import Text from 'components/text'
import { mount } from 'enzyme'

describe('Text component tests', () => {
    it('should match snapshot with strong and underlined and min width', () => {
        const wrapper = mount(<Text strong label="SOME_LABEL" underline minWidth="100px" />)

        expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot if no level passed', () => {
        const wrapper = mount(<Text level={null} label="no level" />)

        expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot level 1', () => {
        const wrapper = mount(<Text level={1} label="level 1" />)

        expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot level 2', () => {
        const wrapper = mount(<Text level={2} label="level 2" />)

        expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot level 3', () => {
        const wrapper = mount(<Text level={3} label="level 3" />)

        expect(wrapper).toMatchSnapshot()
    })
})
