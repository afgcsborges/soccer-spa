import React from 'react'
import Switch from 'components/switch'
import { act } from 'react-dom/test-utils'
import { shallow } from 'enzyme'

it('Should match snapshot without onChange', async () => {
    const wrapper = shallow(<Switch />)

    act(() => {
        wrapper.find('Styled(Switch)').props().onChange()
    })

    await act(async () => {
        await wrapper.update()
    })

    expect(wrapper).toMatchSnapshot()
})

it('Should toggle switch on click', async () => {
    const mockOnChange = jest.fn()

    const wrapper = shallow(
        <Switch uncheckedLabel={'Unchecked'} checkedLabel={'Checked'} onChange={mockOnChange} checked />
    )

    act(() => {
        wrapper.find('Styled(Switch)').props().onChange()
    })

    await act(async () => {
        await wrapper.update()
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Text').at(0).props().label).toBe('Unchecked')
    expect(wrapper.find('Text').at(1).props().label).toBe('Checked')
    expect(mockOnChange).toHaveBeenCalled()
})

it('Should toggle switch on click without labels', async () => {
    const mockOnChange = jest.fn()

    const wrapper = shallow(<Switch onChange={mockOnChange} checked />)

    act(() => {
        wrapper.find('Styled(Switch)').props().onChange()
    })

    await act(async () => {
        await wrapper.update()
    })

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Text')).toMatchObject({})
    expect(mockOnChange).toHaveBeenCalled()
})
