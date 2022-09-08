import { mount, shallow } from 'enzyme'

/* eslint-disable no-unused-vars */
import React from 'react'
import TeamInformation from 'containers/team-information'
import { act } from '@testing-library/react'
import { teamData } from '../../__mocks__/axiosMocks'
import { waitStateUpdate } from '../../__mocks__/utils'

describe('Team Information container tests', () => {
    it('should render container correctly', async () => {
        const wrapper = mount(<TeamInformation teamData={teamData.data} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('DisplayBox').at(0).props().value).toBe('Nordsjælland')
        expect(wrapper.find('DisplayBox').at(1).props().value).toBe('FCN')
        expect(wrapper.find('DisplayBox').at(2).props().value).toBe('Denmark')
        expect(wrapper.find('DisplayBox').at(3).props().value).toBe(2003)
        expect(wrapper.find('DisplayBox').at(4).props().value).toBe('Right to Dream Park')
        expect(wrapper.find('DisplayBox').at(5).props().value).toBe(10100)
        expect(wrapper.find('DisplayBox').at(6).props().value).toBe('Idrætsvænget 2')
        expect(wrapper.find('DisplayBox').at(7).props().value).toBe('grass')
    })

    it('should render container correctly with empty teamData', async () => {
        const wrapper = shallow(<TeamInformation teamData={{}} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('DisplayBox').at(0).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(1).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(2).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(3).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(4).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(5).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(6).props().value).toBe('-')
        expect(wrapper.find('DisplayBox').at(7).props().value).toBe('-')
    })
})
