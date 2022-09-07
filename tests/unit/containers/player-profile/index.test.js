import PlayerProfile from 'containers/player-profile'
import React from 'react'
import { act } from '@testing-library/react'
import axios from 'axios'
import { mount } from 'enzyme'

jest.mock('axios')

// eslint-disable-next-line no-promise-executor-return
const waitStateUpdate = () => act(() => new Promise(resolve => setTimeout(resolve, 50)))

const playerData = {
    data: {
        birthcountry: 'Denmark',
        birthdate: '04/01/1998',
        birthplace: null,
        common_name: 'M. Frese',
        country_id: 320,
        display_name: 'Martin Frese',
        firstname: 'Martin',
        fullname: 'Martin Frese',
        height: '178 cm',
        image_path: 'https://cdn.sportmonks.com/images/soccer/players/0/84512.png',
        lastname: 'Frese',
        nationality: 'Denmark',
        player_id: 84512,
        position: {
            data: {
                name: 'Midfielder'
            }
        },
        position_id: 3,
        team: {
            data: {
                name: 'Nordsj\u00e6lland'
            }
        },
        team_id: 2394,
        weight: '75 kg'
    }
}

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
})
