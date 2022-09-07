import PlayerProfile from 'containers/player-profile'
import React from 'react'
import { act } from '@testing-library/react'
import axios from 'axios'
import { mount } from 'enzyme'
import { playerData } from '../../__mocks__/axiosMocks'

jest.mock('axios')

// eslint-disable-next-line no-promise-executor-return
const waitStateUpdate = () => act(() => new Promise(resolve => setTimeout(resolve, 50)))

axios.get.mockImplementation(url => {
    if (url === 'https://soccer.sportmonks.com/api/v2.0/players/1?include=position,team') {
        return Promise.resolve({ data: playerData })
    }
    /* eslint-disable-next-line prefer-promise-reject-errors */
    return Promise.reject()
})

describe('Palyer Profile tests', () => {
    it('should render data correctly', async () => {
        const onClose = jest.fn()
        axios.get.mockResolvedValue({ data: playerData })
        const wrapper = mount(<PlayerProfile apiKey="SOME_KEY" onClose={onClose} playerId={1} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()

        expect(wrapper.find('DisplayBox').at(0).props().value).toBe(playerData.data.firstname)
        expect(wrapper.find('DisplayBox').at(1).props().value).toBe(playerData.data.lastname)
        expect(wrapper.find('DisplayBox').at(2).props().value).toBe(playerData.data.nationality)
        expect(wrapper.find('DisplayBox').at(3).props().value).toBe(playerData.data.team.data.name)
        expect(wrapper.find('DisplayBox').at(4).props().value).toBe(playerData.data.birthdate)
        expect(wrapper.find('DisplayBox').at(5).props().value).toBe(playerData.data.position.data.name)
        expect(wrapper.find('DisplayBox').at(6).props().value).toBe(playerData.data.height)
        expect(wrapper.find('DisplayBox').at(7).props().value).toBe(playerData.data.weight)
    })

    it('should render data with -', async () => {
        const onClose = jest.fn()
        axios.get.mockResolvedValue({ data: {} })
        const wrapper = mount(<PlayerProfile apiKey="SOME_KEY" onClose={onClose} playerId={1} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

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

    it('should trigger onClose', async () => {
        const onClose = jest.fn()
        axios.get.mockResolvedValue({ data: playerData })
        const wrapper = mount(<PlayerProfile apiKey="SOME_KEY" onClose={onClose} playerId={1} />)

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        await act(async () => {
            await wrapper.update()
        })
        await waitStateUpdate()

        expect(wrapper).toMatchSnapshot()

        act(() => {
            wrapper.find('PlayerProfile').props().onClose()
        })

        await act(async () => {
            await wrapper.update()
        })

        expect(onClose).toHaveBeenCalled()
    })
})
