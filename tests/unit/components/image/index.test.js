import Image from 'components/image'
import React from 'react'
import { shallow } from 'enzyme'

const noImage =
    'https://media.istockphoto.com/vectors/image-unavailable-icon-vector-id1206575314?k=20&m=1206575314&s=170667a&w=0&h=ioRmz6_fwuW0bETWDp9JZIZdv-YayKXTdtGmjgB5pnI='

describe('Image component tests', () => {
    it('should have no image src', () => {
        const wrapper = shallow(<Image />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('img').props().src).toBe(noImage)
        expect(wrapper.find('img').props().width).toBe(150)
    })

    it('should have correct src and width', () => {
        const wrapper = shallow(<Image src={'SOME_SRC'} width={200} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('img').props().src).toBe('SOME_SRC')
        expect(wrapper.find('img').props().width).toBe(200)
    })
})
