import { mount, shallow } from 'enzyme'

import React from 'react'
import Select from 'components/select'
import { act } from 'react-dom/test-utils'

describe('Select component tests', () => {
    it('should render select correctly with default props', () => {
        const items = [
            {
                key: '1',
                label: '1'
            },
            {
                key: '2',
                label: '2'
            }
        ]
        const wrapper = shallow(<Select options={items} />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Option').at(0).props().label).toBe('1')
        expect(wrapper.find('Option').at(1).props().label).toBe('2')
        expect(wrapper.find('Styled(Component)').props().allowClear).toBeTruthy()
        expect(wrapper.find('Styled(Component)').props().disabled).toBeFalsy()
        expect(wrapper.find('Styled(Component)').props().placeholder).toBe('')
        expect(wrapper.find('Styled(Component)').props().showArrow).toBeTruthy()
        expect(wrapper.find('Styled(Component)').props().showSearch).toBeFalsy()
        expect(wrapper.find('Styled(Component)').props().size).toBe('large')
    })

    it('should render select correctly with given props', () => {
        const items = [
            {
                key: '1',
                label: '1'
            },
            {
                key: '2',
                label: '2'
            }
        ]
        const wrapper = shallow(
            <Select
                options={items}
                allowClear={false}
                disabled={true}
                placeholder={'SOME_PLACEHOLDER'}
                showSearch={true}
                size="middle"
            />
        )
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Styled(Component)').props().allowClear).toBeFalsy()
        expect(wrapper.find('Styled(Component)').props().disabled).toBeTruthy()
        expect(wrapper.find('Styled(Component)').props().placeholder).toBe('SOME_PLACEHOLDER')
        expect(wrapper.find('Styled(Component)').props().showSearch).toBeTruthy()
        expect(wrapper.find('Styled(Component)').props().size).toBe('middle')
    })

    it('should trigger on change', async () => {
        const onChangeFn = jest.fn()
        const items = [
            {
                key: '1',
                label: '1'
            },
            {
                key: '2',
                label: '2'
            }
        ]
        const wrapper = shallow(
            <Select
                options={items}
                allowClear={false}
                placeholder={'SOME_PLACEHOLDER'}
                showSearch={true}
                size="middle"
                onChange={onChangeFn}
            />
        )
        wrapper.find('Styled(Component)').props().onChange()

        await act(async () => {
            await wrapper.update()
        })
        expect(onChangeFn).toHaveBeenCalled()
    })

    it('should have correct size middle', () => {
        const wrapper = mount(<Select size="middle" />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Select').at(0).props().size).toBe('middle')
    })

    it('should have correct disabled true', () => {
        const wrapper = mount(<Select disabled />)
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('Select').at(0).props().disabled).toBeTruthy()
    })
})
